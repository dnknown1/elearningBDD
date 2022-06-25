@f1
Feature: Login
  user wants to login

  Background: User is at homepage trying to login
    Given user is on homepage

  @f1n
  Scenario Outline: user tries invalid login
    When user provides invalid credentials "<uname>" "<upass>"
    And user clicks on login button
    Then validation messege appears

    Examples: 
      | uname | upass   |
      | abcde | pass12  |
      | abcfe | pass123 |
      | abs   | a123    |

  @f1p
  Scenario Outline: user tries valid login
    When user provides valid credentials "<uname>" "<upass>"
    And user clicks on login button
    Then user navigates to profile "<profile>" homepage

    Examples: 
      | uname  | upass   | profile         |
      | new4   | pass123 | New Learner4    |
      | dbly96 | pass123 | Debalaya Bodhak |
      | neo    | pass123 | Neo Learner     |
