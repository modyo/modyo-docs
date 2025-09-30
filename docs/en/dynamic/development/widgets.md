# Widgets

In Dynamic Framework, widgets are reusable components that encapsulate functionality and presentation, facilitating the construction of modular user interfaces. Dynamic Framework is automatically installed when creating a new application in Modyo. To integrate a dynamic component into your Modyo application, follow these steps:

**1. Application creation**: If you haven't already, create a new application in Modyo and a page within it.
2.  **Adding an HTML block**: In your page, insert a new content block.
3.  **Code insertion**: Within the block, you can use the following HTML code:

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

This code will render a ready-to-use card component. Explore more components in our [component catalog](https://dynamic.modyo.cloud/develop-dynamic-ui/components/cards).