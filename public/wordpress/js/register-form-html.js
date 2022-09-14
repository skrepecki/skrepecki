const register_login_form = `
<div class="container-fluid tm-mt-60">
        <h2 class="tm-text-primary mb-5">Регистрация/Вход</h2>
        <form id="contact-form" action="#" method="post" class="tm-contact-form mx-auto">
          <div class="form-group">
            <input type="email" id="email" class="form-control rounded-0" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="password" class="form-control rounded-0" placeholder="Password" required>
          </div>
          <div class="form-group tm-text-right">
            <button type="submit" class="btn btn-primary">В перед</button>
          </div>
        </form>
</div>`

let section_login_page = document.getElementById('section_login')

section_login_page.innerHTML = register_login_form