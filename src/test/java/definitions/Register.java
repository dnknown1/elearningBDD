package definitions;


import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import elearning.RegisterTest;
import hooks.UseChromeAutomator;
import ideas.IRegisterTest;

public class Register {
	private IRegisterTest registration = new RegisterTest(UseChromeAutomator.d);
	
	@When("user clicks on sign up link")
	public void user_clicks_on_sign_up_link() {
		registration.clickSignUPLink();
	}

	@When("user fills redundant details {string} {string} {string} {string} {string} {string}")
	public void user_fills_redundant_details(String firstname, String lastname, String email, String username, String password, String confirmPassword) {
		registration
		.fillMandatoryFields(firstname, lastname, email, username, password, confirmPassword);
	}

	@When("user clicks on Register")
	public void user_clicks_on_Register() {
	 registration.clickRegister();   
	}

	@Then("user presented with error validation messege")
	public void user_presented_with_error_validation_messege() {
		registration.validateRegistrationError();
	}

	@When("user fills unique details {string} {string} {string} {string} {string} {string}")
	public void user_fills_unique_details(String firstname, String lastname, String email, String username, String password, String confirmPassword) {
		registration
		.fillMandatoryFields(firstname, lastname, email, username, password, confirmPassword);
	}

	@Then("user presented with profile {string} welcome messege")
	public void user_presented_with_profile_welcome_messege(String profile) {
	    registration.validateRegistrationSuccess(profile);
	}
}
