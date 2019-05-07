<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Awesome Profile Cards</title>
  <link rel="icon" href="favicon.png" />
  <link href="https://fonts.googleapis.com/css?family=Merriweather:900|Montserrat:400,700|Open+Sans:400,600"
  rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
  <partial src="_main-header.html"></partial>
  <main>
    <partial src="_main-preview.html"></partial>

    <form action="" method="post">
      <fieldset class="fieldset-item">
        <partial nameId='arrow-design' title="Design" buttonId="ButtonDesign" upDown="up" icon="far fa-object-ungroup icon" src="_form__fieldset__title.html"></partial>
        <partial src="_form-design.html"></partial>
      </fieldset>

      <fieldset class="fieldset-item">
        <partial nameId='arrow-fillTheGap' title="Fill" buttonId="ButtonFill" upDown="down" icon="far fa-keyboard icon" src="_form__fieldset__title.html"></partial>
        <partial src="_form-fillTheGap.html"></partial>
      </fieldset>

      <fieldset class="fieldset-item">
        <partial nameId='arrow-share' title="Share" buttonId="ButtonShare" upDown="down" icon="fas fa-share-alt icon" src="_form__fieldset__title.html"></partial>
        <partial src="_form-share.html"></partial>
      </fieldset>

      <div class="alert">
        <p>Do you want to delete your data?</p>
        <button type="button" class="btn btn-resetY">Yes</button>
        <button type="button" class="btn btn-resetN">No</button>
      </div>

    </form>

   
  </main>
  <partial src="_footer.html"></partial>
  <script type="text/javascript" src="assets/js/main.js"></script>
</body>

</html>