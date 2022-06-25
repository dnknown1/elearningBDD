package definitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import elearning.LoginTest;
import hooks.UseChromeAutomator;
import ideas.ILogInTest;

public class Login {
	private ILogInTest logIn = new LoginTest(UseChromeAutomator.d);
	
	@Given("user is on homepage")
	public void user_is_on_homepage() {
		logIn.root();
	}

	@When("user provides invalid credentials {string} {string}")
	public void user_provides_invalid_credentials(String uname, String upass) {
		logIn.inputUname(uname);
		logIn.inputUpass(upass);
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		logIn.clickLogin();
	}

	@Then("validation messege appears")
	public void validation_messege_appears() {
		logIn.invalidLogin();
	}

	@When("user provides valid credentials {string} {string}")
	public void user_provides_valid_credentials(String uname, String upass) {
		logIn.inputUname(uname);
		logIn.inputUpass(upass);
	}

	@Then("user navigates to profile {string} homepage")
	public void user_navigates_to_profile_homepage(String profile) {
		logIn.validateProfilePage(profile);
	}
}
