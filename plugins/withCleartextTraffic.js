const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withCleartextTraffic(config) {
  // Modificar AndroidManifest
  config = withAndroidManifest(config, (config) => {
    const mainApplication = config.modResults.manifest.application[0];
    
    // Forzar cleartext traffic
    mainApplication.$['android:usesCleartextTraffic'] = 'true';
    mainApplication.$['android:networkSecurityConfig'] = '@xml/network_security_config';
    
    console.log('✅ Cleartext traffic configurado en AndroidManifest');
    
    return config;
  });

  // Crear/verificar network_security_config.xml
  config = withDangerousMod(config, [
    'android',
    async (config) => {
      const xmlDir = path.join(
        config.modRequest.platformProjectRoot,
        'app/src/main/res/xml'
      );
      
      const xmlPath = path.join(xmlDir, 'network_security_config.xml');
      
      const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">18.116.201.101</domain>
        <domain includeSubdomains="true">10.0.2.2</domain>
    </domain-config>
</network-security-config>`;

      // Crear directorio si no existe
      if (!fs.existsSync(xmlDir)) {
        fs.mkdirSync(xmlDir, { recursive: true });
        console.log('✅ Directorio xml/ creado');
      }
      
      // Escribir archivo
      fs.writeFileSync(xmlPath, xmlContent);
      console.log('✅ network_security_config.xml creado');
      
      return config;
    },
  ]);

  return config;
};