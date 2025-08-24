# Widgets

En Dynamic Framework, los widgets son componentes reutilizables que encapsulan funcionalidad y presentación, facilitando la construcción de interfaces de usuario modulares. Dynamic Framework se instala automáticamente al crear una nueva aplicación en Modyo. Para integrar un componente dinámico en tu aplicación Modyo, sigue estos pasos:

**1. Creación de la aplicación**: Si aún no lo has hecho, crea una nueva aplicación en Modyo y una página dentro de ella.
2.  **Adición de un bloque HTML**: En tu página, inserta un nuevo bloque de contenido.
3.  **Inserción del código**: Dentro del bloque, puedes utilizar el siguiente código HTML:

    ```html
    <div class="container">
      <div class="d-flex gap-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top"
            src="https://cloud.modyocdn.com/uploads/c1eb380f-8204-4ef2-b119-cb8c3d415cb7/original/example_2.jpg"
            alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text mb-4">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    ```

Este código renderizará un componente de tarjeta listo para usar. Explora más componentes en nuestro [catálogo de componentes](https://dynamic.modyo.cloud/develop-dynamic-ui/components/cards).
