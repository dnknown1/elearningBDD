package ideas;

public interface IComposeMailTest {
	public void loadProfilePage();
	
	public void openProfileMenu();
	
	public void clickInboxOption();
	
	public void clickComposeNew();
	
	public void inputInitials(String inits);
	
	public void selectAutoRecipient(String rcp);
	
	public void inputSubject(String subject);

	public void clickSendMail();
	
	public void validateMailSuccessful();
}
