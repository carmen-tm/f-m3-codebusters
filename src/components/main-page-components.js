
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
