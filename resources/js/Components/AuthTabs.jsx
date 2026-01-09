import React from "react";

const AuthTabs = () => {
  return (
    <div>
      {/* Tabs */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="false"
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="true"
          >
            Register
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="pills-tabContent">
        {/* Login Tab */}
        <div
          className="tab-pane fade"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h3 className="box-title mb-30">Sign in to your account</h3>
          <div className="th-login-form">
            <form
              action="mail.php"
              method="POST"
              className="login-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-12">
                  <label>Username or email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group col-12">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    required
                  />
                </div>

                <div className="form-btn mb-20 col-12">
                  <button type="submit" className="th-btn btn-fw th-radius2">
                    Send Message
                  </button>
                </div>
              </div>

              <div id="forgot_url">
                <a href="my-account.html">Forgot password?</a>
              </div>

              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>

        {/* Register Tab */}
        <div
          className="tab-pane fade show active"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <h3 className="th-form-title mb-30">Sign in to your account</h3>
          <form
            action="mail.php"
            method="POST"
            className="login-form ajax-contact"
          >
            <div className="row">
              <div className="form-group col-12">
                <label>Username*</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  required
                />
              </div>

              <div className="form-group col-12">
                <label>First name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  required
                />
              </div>

              <div className="form-group col-12">
                <label>Last name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  required
                />
              </div>

              <div className="form-group col-12">
                <label>Your email*</label>
                <input
                  type="email"
                  className="form-control"
                  name="new_email"
                  id="new_email"
                  required
                />
              </div>

              <div className="form-group col-12">
                <label>Confirm email*</label>
                <input
                  type="email"
                  className="form-control"
                  name="new_email_confirm"
                  id="new_email_confirm"
                  required
                />
              </div>

              <div className="statement">
                <span className="register-notes">
                  A password will be emailed to you.
                </span>
              </div>

              <div className="form-btn mt-20 col-12">
                <button type="submit" className="th-btn btn-fw th-radius2">
                  Sign up
                </button>
              </div>
            </div>

            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
