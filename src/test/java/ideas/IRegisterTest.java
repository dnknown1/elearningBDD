package ideas;

public interface IRegisterTest {
	public void fillMandatoryFields(String firstname, String lastname, String email, String username, String password, String confirmPassword);
	
	public void clickSignUPLink();
	
	public void clickRegister();
	
	public void validateRegistrationError();

	public void validateRegistrationSuccess(String profile);
}
