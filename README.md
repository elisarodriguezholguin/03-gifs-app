# React + TypeScript + Vite

# Pruebas Unitarias

La aplicación cuenta con pruebas unitarias implementadas con Vitest y React Testing Library, enfocadas en garantizar el correcto funcionamiento de los componentes, hooks y lógica de negocio.

# ✔️ Componentes probados

# SearchBar

- Renderizado correcto del input y botón

- Ejecución de la búsqueda al escribir texto

- Implementación de debounce, asegurando que la función de búsqueda se ejecute una sola vez con el último valor ingresado

- Ejecución de la búsqueda al presionar el botón

- Validación del placeholder recibido por props

# Componentes de GIFs

- Renderizado correcto de listas de GIFs

* Manejo adecuado de estados de carga

* Validación de datos obtenidos desde la API

# ✔️ Hooks personalizados

- useGifs

- Retorno del estado inicial

- Actualización correcta del estado al realizar una búsqueda

- Llamada correcta a las acciones que consultan la API

- Manejo de respuestas y errores simulados mediante mocks

# ✔️ Acciones y servicios

- Pruebas sobre las funciones encargadas de consumir la API de Giphy

 - Uso de mocks para simular respuestas HTTP y evitar dependencias externas

- Verificación de datos transformados antes de ser utilizados por los componentes

# 📊 Cobertura de Código

- Las pruebas permiten alcanzar una alta cobertura de código, asegurando la estabilidad del proyecto y reduciendo la posibilidad de errores en producción.

- Statements: ~89%

- Branches: ~73%

- Functions: ~84%

- Lines: ~91%

# 🛠 Herramientas de Testing

- Vitest

- React Testing Library

- @testing-library/user-event

- Mocks con vi.fn()