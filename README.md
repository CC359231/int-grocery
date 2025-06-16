# Ejercicio Grocery

## Objetivos

- Implementar nuevas funciones de lógica de dominio
- Codificar test unitarios en paralelo a la implementación
- Usar buenas prácticas de codificacion
- Modificar la interfaz de usuario para usar las nuevas funciones

### Aspectos a tener en cuenta

- Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.
- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
- Ejecute el linter con `npm run lint` para eliminar errores y warnings.

> Recuerde al finalizar cada parte:
>
> - realizar commit / push
> - subir un issue con screenshots

### Parte A

1. En la clase `Product` agregar el campo `discount`.
   - el campo es un número entero, mínimo 0 y máximo 100

Implementar las funciones `getDiscount()` y `setDiscount()` validando que valor recibido es válido.

Modificar la función `toString()` mostrando el descuento si es mayor a cero.

Codificar test unitarios para las nuevas funciones

- incluir test para casos de error
- la cobertura de los test unitarios debe alcanzar el 100%

2. En la clase `Grocery` implementar la función `totalDiscountedProducts()` que retorna el total de productos con descuento del almacén.
   Codificar test unitarios para la función `totalDiscountedProducts()`.

Subir un issue 'Parte A' con un screenshot de la terminal con el resumen de los tests unitarios y cobertura.

### Parte B

3. Agregar elementos a la intefaz de usuario para usar las nuevas funciones.

   - campo 'Descuento' en el formulario 'Nuevo producto'
   - mostrar 'Total productos con descuento' en el panel 'Inicio'

4. Usar el componente `card` de Bootstrap para mostrar los productos en los paneles 'Frutas' y 'Verduras'.
   - usar el nombre del producto como título en cada card
   - en el cuerpo del card mostrar: precio, descuento

Subir un issue 'Parte B' con screenshot de la página en el navegador (paneles Inicio y Nuevo producto).
