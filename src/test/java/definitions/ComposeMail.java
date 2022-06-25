package definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import elearning.ComposeMailTest;
import hooks.UseChromeAutomator;
import ideas.IComposeMailTest;

public class ComposeMail {
	private IComposeMailTest sendMail = new ComposeMailTest(UseChromeAutomator.d);
	
	@Given("user is at profile page")
	public void user_is_at_profile_page() {
	    sendMail.loadProfilePage();
	}
	
	@When("user clicks on profile menu")
	public void user_clicks_on_profile_menu() {
	    sendMail.openProfileMenu();
	}
	
	@When("user clicks on inbox option")
	public void user_clicks_on_inbox_option() {
	    sendMail.clickInboxOption();
	}
	
	@When("user clicks on compose icon")
	public void user_clicks_on_compose_icon() {
	    sendMail.clickComposeNew();
	}
	
	@When("user inputs initials {string} and selects recipient {string}")
	public void user_inputs_initials_and_selects_recipient(String inits, String rcp) {
	    sendMail.inputInitials(inits);
	    sendMail.selectAutoRecipient(rcp);
	}
	
	@When("user inputs subject {string}")
	public void user_inputs_subject(String subject) {
	    sendMail.inputSubject(subject);
	}
	
	@When("user clicks on send mail")
	public void user_clicks_on_send_mail() {
	    sendMail.clickSendMail();
	}
	
	@Then("mail sent successfully")
	public void mail_sent_successfully() {
	    sendMail.validateMailSuccessful();
	}
}
