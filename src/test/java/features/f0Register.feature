@f0
Feature: Elearning registration
  user wants to register their profile on the site

  Background: Trying to register
    Given user is on homepage
    When user clicks on sign up link

  @f0n
  Scenario Outline: invalid user regestration
    And user fills redundant details "<firstname>" "<lastname>" "<email>" "<username>" "<password>" "<confirmPassword>"
    And user clicks on Register
    Then user presented with error validation messege

    Examples: 
      | firstname | lastname | email       | username | password | confirmPassword | profile      |
      | Ami       | Learner2 | bca@xyz.com | acbad    | pass123  | pass123         | Ami Learner2 |

  @f0p
  Scenario Outline: valid user regestration
    And user fills unique details "<firstname>" "<lastname>" "<email>" "<username>" "<password>" "<confirmPassword>"
    And user clicks on Register
    Then user presented with profile "<profile>" welcome messege

    Examples: 
      | firstname | lastname | email       | username | password | confirmPassword | profile      |
      | A7Xn      | Learnor  | new@xyz.com | A7Xn     | pass123  | pass123         | A7Xn Learnor |
