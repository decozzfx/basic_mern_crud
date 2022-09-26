import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">
                    Email
                  </label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">
                    Password
                  </label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      class="input"
                      required
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <div class="field">
                  <Link to="/productlist" class="button is-success">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
