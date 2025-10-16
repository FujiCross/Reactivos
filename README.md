# 🧪 Gestor de Laboratorio de Ciencias

Aplicación web diseñada para gestionar el inventario de **reactivos químicos** y las **prácticas de laboratorio** de manera sencilla y visual.  
Proporciona una interfaz moderna, clara y adaptable que permite al usuario registrar, consultar y administrar los recursos del laboratorio. (Desarrollada con tecnologías muy básicas)

---

## 📸 Vista general de la interfaz

### 🏠 Pantalla de inicio
La pantalla principal da la bienvenida al usuario y muestra un **resumen rápido** del estado del laboratorio.

- **Reactivos:** Cantidad total de materiales registrados en el inventario.  
- **Prácticas:** Número total de prácticas guardadas.  
- **Atajos:** Botones de acción rápida para agregar nuevos reactivos o crear una práctica.

🟩 **Objetivo:** ofrecer un acceso directo y una vista resumida de los datos más importantes del sistema.

---

### 📦 Inventario de Reactivos
Permite **gestionar los reactivos del laboratorio** mediante una tabla interactiva.

**Funciones principales:**
- Visualizar el nombre, cantidad, unidad y estado del reactivo.  
- Agregar nuevos reactivos mediante un modal.  
- Editar o eliminar los existentes.  
- Filtrar o buscar reactivos por nombre o práctica relacionada.

**Elementos destacados:**
- Columna de **acciones** con iconos de edición y eliminación.  
- Filtros de búsqueda integrados.  
- Contador automático de registros.

---

### 🧬 Registro de Prácticas
Sección dedicada a listar todas las **prácticas registradas** en el sistema.

Cada práctica muestra:
- El **nombre** o título.  
- Un botón **“Ver”** que abre un modal con los detalles.

**En el modal de detalle**, se puede visualizar:
- Nombre de la práctica.  
- Descripción o pasos del procedimiento.  
- Lista de reactivos utilizados.

---

## ⚙️ Modales del sistema

### ➕ Modal: Agregar / Editar Reactivo
Permite crear o modificar un reactivo en el inventario.

**Campos disponibles:**
- `Nombre`: Identificador o nombre químico del reactivo.  
- `Cantidad`: Valor numérico del inventario.  
- `Unidad`: g / ml / L, etc.  
- `Estado`: Disponible / Agotado / En revisión.  

**Acciones:**
- **Guardar:** registra o actualiza el reactivo.
- **Cancelar:** cierra el modal sin realizar cambios.

### 👁️ Modal: Ver Práctica
Muestra la información detallada de una práctica registrada.

**Contenido:**
- Nombre de la práctica.  
- Descripción o pasos.  
- Lista de reactivos asociados.  

**Acciones:**
- **Cerrar:** regresa a la vista principal sin modificar los datos.

---

## 💡 Tecnologías utilizadas
- **HTML5** – Estructura semántica de la interfaz.  
- **CSS3** – Diseño moderno y responsivo.  
- **JavaScript (Vanilla)** – Lógica de interacción y manipulación del DOM. 
- **Node.js, JSON local / Express.js** – Almacenamiento y backend.

**Desarrollado por:**  Enchito y Brendinña
