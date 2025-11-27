# Olimpo

Olimpo es una aplicación móvil desarrollada con React Native y Expo que permite a los usuarios crear y gestionar rutinas de entrenamiento personalizadas. La aplicación ofrece una experiencia completa desde el registro de usuarios hasta el seguimiento de entrenamientos completados.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
- [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **Git** (para clonar el repositorio)
- **Expo CLI** (se instalará globalmente o se usará a través de npx)
- **Expo Go** (aplicación móvil para iOS o Android) - Opcional, para probar en dispositivos físicos
- **Android Studio** o **Xcode** - Si deseas ejecutar en emuladores/simuladores

## 📥 Instalación

### 1. Clonar el Repositorio

Primero, clona el repositorio desde GitHub:

```bash
git clone https://github.com/tu-usuario/Olimpo.git
cd Olimpo
```

### 2. Instalar Dependencias

Una vez dentro del directorio del proyecto, instala todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará todas las dependencias listadas en `package.json`, incluyendo:
- React Native
- Expo
- React Navigation
- Y otras dependencias del proyecto

### 3. Verificar la Instalación

Verifica que todo esté correctamente instalado ejecutando:

```bash
npx expo --version
```

## 🚀 Ejecución de la Aplicación

### Opción 1: Ejecutar con Expo Go (Recomendado para desarrollo)

1. **Iniciar el servidor de desarrollo:**

```bash
npm start
```

O alternativamente:

```bash
npx expo start
```

2. **Escanear el código QR:**
   - En **Android**: Abre la app Expo Go y escanea el código QR que aparece en la terminal
   - En **iOS**: Abre la app Cámara y escanea el código QR, luego selecciona "Abrir con Expo Go"

### Opción 2: Ejecutar en Emulador/Simulador

**Para Android:**
```bash
npm run android
```

**Para iOS (solo macOS):**
```bash
npm run ios
```

**Para Web:**
```bash
npm run web
```

### Opción 3: Ejecutar con Docker

Si prefieres usar Docker, puedes construir y ejecutar el contenedor:

```bash
docker build -t olimpo .
docker run -p 19000:19000 -p 19001:19001 olimpo
```

## 🏗️ Arquitectura de la Aplicación

Olimpo sigue una arquitectura basada en componentes de React Native con navegación jerárquica. La aplicación está estructurada de la siguiente manera:

### Flujo de Navegación

```
App.js
  └── SplashScreen (3 segundos)
      └── MainStack (Stack Navigator)
          ├── LoginScreen
          ├── RegisterScreen
          ├── Onboarding (flujo de onboarding)
          │   ├── OnboardingNacimiento
          │   ├── OnboardingPeso
          │   ├── OnboardingAltura
          │   └── OnboardingEnd
          └── TabNavigator (Bottom Tab Navigator)
              ├── HomeStack (Stack Navigator anidado)
              │   ├── HomeScreen
              │   ├── RoutineCreateGoal
              │   ├── RoutineCreateFrequency
              │   ├── RoutineCreate
              │   ├── TrainingLoadScreen
              │   ├── TrainingScreen
              │   └── FinishTrainingLoadScreen
              ├── WorkoutScreen
              └── ChatScreen
```

### Puntos Clave de la Arquitectura

1. **Navegación Híbrida**: Combina Stack Navigation (para flujos lineales) y Tab Navigation (para navegación principal)
2. **Estado Local**: Utiliza React Hooks (useState, useEffect) para manejo de estado local
3. **Navegación por Parámetros**: Los datos se pasan entre pantallas mediante parámetros de navegación
4. **Componentes Reutilizables**: Componentes comunes como `Titulo`, `ProgressBar`, e `IntroImage` se reutilizan en múltiples pantallas
5. **Tema Centralizado**: Los colores y estilos se definen en `src/constants/theme.js` para mantener consistencia

## 📁 Estructura del Proyecto

```
Olimpo/
├── App.js                 # Componente raíz de la aplicación
├── index.js               # Punto de entrada (registra el componente raíz)
├── app.json               # Configuración de Expo
├── package.json           # Dependencias y scripts del proyecto
├── dockerfile             # Configuración de Docker
├── assets/                # Recursos estáticos (imágenes, iconos)
└── src/
    ├── components/        # Componentes reutilizables
    │   ├── IntroImage.js
    │   ├── ProgressBar.js
    │   └── Titulo.js
    ├── constants/         # Constantes y configuración
    │   └── theme.js       # Colores y estilos del tema
    ├── navigation/        # Configuración de navegación
    │   ├── MainStack.js   # Stack principal (login, registro, onboarding)
    │   └── TabNavigator.js # Tab navigator con HomeStack anidado
    └── screens/           # Pantallas de la aplicación
        ├── SplashScreen.js
        ├── LoginScreen.js
        ├── RegisterScreen.js
        ├── Onboarding.js
        ├── OnboardingNacimiento.js
        ├── OnboardingPeso.js
        ├── OnboardingAltura.js
        ├── OnboardingEnd.js
        ├── HomeScreen.js
        ├── RoutineCreateGoal.js
        ├── RoutineCreateFrequency.js
        ├── RoutineCreate.js
        ├── TrainingLoadScreen.js
        ├── TrainingScreen.js
        ├── FinishTrainingLoadScreen.js
        ├── WorkoutScreen.js
        ├── StatScreen.js
        └── ChatScreen.js
```

## 🧩 Componentes Principales

### 📂 src/components/

#### `Titulo.js`
Componente reutilizable para mostrar títulos estilizados en toda la aplicación.
- **Props**: `titulo` (string) - El texto a mostrar
- **Funcionalidad**: Aplica estilos consistentes (tamaño de fuente, color, peso) definidos en el tema

#### `ProgressBar.js`
Barra de progreso visual que muestra el porcentaje completado.
- **Props**: 
  - `bgcolor` (string) - Color de fondo de la barra
  - `completed` (number) - Porcentaje completado (0-100)
- **Funcionalidad**: Renderiza una barra de progreso con el porcentaje mostrado en el centro

#### `IntroImage.js`
Componente para mostrar imágenes de introducción con un gradiente superpuesto.
- **Props**: `url` (string) - URL de la imagen a mostrar
- **Funcionalidad**: Muestra una imagen con un gradiente lineal que va de transparente a opaco, creando un efecto visual elegante

### 📂 src/constants/

#### `theme.js`
Archivo centralizado que define la paleta de colores y estilos de la aplicación.
- **Colores**:
  - `background`: #131313 (fondo oscuro)
  - `fontColor`: #F2EDE1 (color de texto principal)
  - `secondary`: #4AB848 (verde, color secundario/accent)
  - `accent`: #4B4A48 (gris, color de acento)
  - `primary`: #202020 (gris oscuro, color primario)
- **Fuentes**: Define tamaños y pesos de fuente estándar

### 📂 src/navigation/

#### `MainStack.js`
Configura el Stack Navigator principal que maneja la navegación entre pantallas de autenticación, registro y onboarding.
- **Pantallas incluidas**:
  - LoginScreen (pantalla inicial)
  - RegisterScreen
  - Onboarding y sus variantes (Nacimiento, Peso, Altura, End)
  - TabNavigator (pantalla principal después del login)
- **Funcionalidad**: Gestiona el flujo inicial de la aplicación antes de que el usuario acceda a las funcionalidades principales

#### `TabNavigator.js`
Implementa la navegación por pestañas en la parte inferior de la pantalla.
- **Tabs principales**:
  - **HomeStack**: Stack anidado que contiene HomeScreen y todas las pantallas relacionadas con rutinas y entrenamientos
  - **WorkoutScreen**: Pantalla de entrenamientos
  - **ChatScreen**: Pantalla de chat (comentada: StatScreen)
- **HomeStack anidado**: Contiene:
  - HomeScreen
  - RoutineCreateGoal
  - RoutineCreateFrequency
  - RoutineCreate
  - TrainingLoadScreen
  - TrainingScreen
  - FinishTrainingLoadScreen
- **Funcionalidad**: Proporciona navegación rápida entre las secciones principales de la app

### 📂 src/screens/

#### `SplashScreen.js`
Pantalla de bienvenida que se muestra al iniciar la aplicación.
- **Funcionalidad**: Muestra el logo de la aplicación durante 3 segundos antes de cargar el contenido principal

#### `LoginScreen.js`
Pantalla de inicio de sesión.
- **Funcionalidad**: 
  - Permite al usuario ingresar correo y contraseña
  - Valida credenciales contra un endpoint de API (`http://10.0.2.2:8000/usuarios`)
  - Navega a TabNavigator si las credenciales son correctas
  - Permite navegar a RegisterScreen para nuevos usuarios

#### `RegisterScreen.js`
Pantalla de registro de nuevos usuarios.
- **Funcionalidad**: Permite crear una nueva cuenta de usuario

#### `Onboarding.js` y variantes
Flujo de onboarding que recopila información inicial del usuario.
- **Onboarding.js**: Pantalla de bienvenida al proceso de onboarding
- **OnboardingNacimiento.js**: Recopila fecha de nacimiento
- **OnboardingPeso.js**: Recopila peso del usuario
- **OnboardingAltura.js**: Recopila altura del usuario
- **OnboardingEnd.js**: Pantalla final del proceso de onboarding
- **Funcionalidad**: Guía al usuario a través de un proceso paso a paso para personalizar su experiencia

#### `HomeScreen.js`
Pantalla principal de la aplicación con tres estados diferentes:
1. **Sin rutina**: Muestra opción para crear una nueva rutina
2. **Con rutina**: Muestra la rutina actual con opción de empezar entrenamiento
3. **Rutina completada**: Muestra estadísticas del entrenamiento completado
- **Funcionalidad**:
  - Muestra días de la semana seleccionables
  - Muestra ejercicios del día seleccionado en formato de grid
  - Permite navegar a la creación de rutina o iniciar entrenamiento
  - Muestra estadísticas después de completar un entrenamiento

#### `RoutineCreateGoal.js`
Primera pantalla del flujo de creación de rutina.
- **Funcionalidad**: Permite seleccionar el objetivo del entrenamiento (Bajar de peso, Definición, Ser saludable)
- **Navegación**: Pasa a `RoutineCreateFrequency` con el objetivo seleccionado

#### `RoutineCreateFrequency.js`
Segunda pantalla del flujo de creación de rutina.
- **Funcionalidad**: Permite seleccionar la frecuencia de entrenamiento
- **Navegación**: Pasa a `RoutineCreate` con frecuencia y objetivo

#### `RoutineCreate.js`
Tercera pantalla del flujo de creación de rutina.
- **Funcionalidad**: Permite seleccionar días de la semana y ejercicios para cada día
- **Navegación**: Guarda la rutina y regresa a `HomeScreen`

#### `TrainingLoadScreen.js`
Pantalla de carga antes de iniciar el entrenamiento.
- **Funcionalidad**: Muestra una pantalla de preparación antes de comenzar el entrenamiento
- **Navegación**: Pasa a `TrainingScreen` con la rutina seleccionada

#### `TrainingScreen.js`
Pantalla principal durante el entrenamiento.
- **Funcionalidad**:
  - Muestra los ejercicios del día seleccionado
  - Permite marcar ejercicios como completados con checkboxes
  - Calcula y muestra el progreso en tiempo real con ProgressBar
  - Rastrea el tiempo de duración del entrenamiento
  - Al finalizar, calcula estadísticas y navega a `FinishTrainingLoadScreen`
- **Estado**: Mantiene un array de ejercicios completados y calcula el porcentaje de progreso

#### `FinishTrainingLoadScreen.js`
Pantalla de transición después de completar el entrenamiento.
- **Funcionalidad**: Muestra una pantalla de finalización antes de regresar a HomeScreen con estadísticas
- **Navegación**: Regresa a `HomeScreen` con datos de la sesión completada

#### `WorkoutScreen.js`
Pantalla de entrenamientos disponibles.
- **Funcionalidad**: Muestra diferentes opciones de entrenamientos o rutinas disponibles

#### `ChatScreen.js`
Pantalla de chat (funcionalidad futura).
- **Funcionalidad**: Interfaz para comunicación o asistencia

#### `StatScreen.js`
Pantalla de estadísticas (actualmente comentada en TabNavigator).
- **Funcionalidad**: Mostraría estadísticas detalladas del usuario

## 🔄 Flujo de Usuario Típico

1. **Inicio**: La app muestra `SplashScreen` por 3 segundos
2. **Autenticación**: Usuario ve `LoginScreen` o `RegisterScreen`
3. **Onboarding** (nuevos usuarios): Flujo de `Onboarding` → recopilación de datos → `OnboardingEnd`
4. **Home**: Usuario accede a `HomeScreen` a través de `TabNavigator`
5. **Crear Rutina** (si no existe):
   - `RoutineCreateGoal` → `RoutineCreateFrequency` → `RoutineCreate`
   - Regresa a `HomeScreen` con rutina creada
6. **Entrenar**:
   - `HomeScreen` → `TrainingLoadScreen` → `TrainingScreen`
   - Usuario completa ejercicios → `FinishTrainingLoadScreen` → `HomeScreen` con estadísticas

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil multiplataforma
- **Expo**: Plataforma y herramientas para desarrollo React Native
- **React Navigation**: Biblioteca de navegación para React Native
  - `@react-navigation/native`: Core de navegación
  - `@react-navigation/native-stack`: Stack Navigator
  - `@react-navigation/bottom-tabs`: Tab Navigator
- **expo-linear-gradient**: Gradientes lineales
- **react-native-bouncy-checkbox**: Componente de checkbox animado


## 🤝 Contribución

Para contribuir al proyecto:

1. Crea un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


---

**Desarrollado con ❤️ para ayudar a las personas a alcanzar sus objetivos de fitness**
