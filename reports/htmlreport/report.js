$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/f0Register.feature");
formatter.feature({
  "name": "Elearning registration",
  "description": "  user wants to register their profile on the site",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "invalid user regestration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user fills redundant details \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cemail\u003e\" \"\u003cusername\u003e\" \"\u003cpassword\u003e\" \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.step({
  "name": "user presented with error validation messege",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "password",
        "confirmPassword",
        "profile"
      ]
    },
    {
      "cells": [
        "Ami",
        "Learner2",
        "bca@xyz.com",
        "acbad",
        "pass123",
        "pass123",
        "Ami Learner2"
      ]
    }
  ]
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up link",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_clicks_on_sign_up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "invalid user regestration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user fills redundant details \"Ami\" \"Learner2\" \"bca@xyz.com\" \"acbad\" \"pass123\" \"pass123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_fills_redundant_details(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presented with error validation messege",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_presented_with_error_validation_messege()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "valid user regestration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user fills unique details \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cemail\u003e\" \"\u003cusername\u003e\" \"\u003cpassword\u003e\" \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.step({
  "name": "user presented with profile \"\u003cprofile\u003e\" welcome messege",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "password",
        "confirmPassword",
        "profile"
      ]
    },
    {
      "cells": [
        "A7Xn",
        "Learnor",
        "new@xyz.com",
        "A7Xn",
        "pass123",
        "pass123",
        "A7Xn Learnor"
      ]
    }
  ]
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up link",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_clicks_on_sign_up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid user regestration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user fills unique details \"A7Xn\" \"Learnor\" \"new@xyz.com\" \"A7Xn\" \"pass123\" \"pass123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_fills_unique_details(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presented with profile \"A7Xn Learnor\" welcome messege",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_presented_with_profile_welcome_messege(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/f1Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  user wants to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"\u003cuname\u003e\" \"\u003cupass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "upass"
      ]
    },
    {
      "cells": [
        "abcde",
        "pass12"
      ]
    },
    {
      "cells": [
        "abcfe",
        "pass123"
      ]
    },
    {
      "cells": [
        "abs",
        "a123"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"abcde\" \"pass12\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validation_messege_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"abcfe\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validation_messege_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides invalid credentials \"abs\" \"a123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_invalid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation messege appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.validation_messege_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"\u003cuname\u003e\" \"\u003cupass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to profile \"\u003cprofile\u003e\" homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "upass",
        "profile"
      ]
    },
    {
      "cells": [
        "new4",
        "pass123",
        "New Learner4"
      ]
    },
    {
      "cells": [
        "dbly96",
        "pass123",
        "Debalaya Bodhak"
      ]
    },
    {
      "cells": [
        "neo",
        "pass123",
        "Neo Learner"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"new4\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"New Learner4\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_profile_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"dbly96\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"Debalaya Bodhak\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_profile_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid credentials \"neo\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_provides_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"Neo Learner\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_profile_homepage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/f2ComposeMail.feature");
formatter.feature({
  "name": "Compose mail",
  "description": "  user wants to send email",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify blank mail can be sent",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2p"
    },
    {
      "name": "@f2pblank"
    }
  ]
});
formatter.step({
  "name": "user clicks on profile menu",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on inbox option",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on compose icon",
  "keyword": "And "
});
formatter.step({
  "name": "user inputs initials \"\u003cinits\u003e\" and selects recipient \"\u003crcp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user inputs subject \"\u003csubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on send mail",
  "keyword": "And "
});
formatter.step({
  "name": "mail sent successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inits",
        "rcp",
        "subject"
      ]
    },
    {
      "cells": [
        "amit",
        "amit luthra",
        "Test mail new test"
      ]
    },
    {
      "cells": [
        "ami",
        "amit xyz",
        "Test mail new test"
      ]
    }
  ]
});
formatter.background({
  "name": "user logs in to their profile",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "ComposeMail.user_is_at_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify blank mail can be sent",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2p"
    },
    {
      "name": "@f2pblank"
    }
  ]
});
formatter.step({
  "name": "user clicks on profile menu",
  "keyword": "When "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on inbox option",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_inbox_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on compose icon",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_compose_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs initials \"amit\" and selects recipient \"amit luthra\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_inputs_initials_and_selects_recipient(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs subject \"Test mail new test\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_inputs_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on send mail",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_send_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mail sent successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComposeMail.mail_sent_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user logs in to their profile",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at profile page",
  "keyword": "Given "
});
formatter.match({
  "location": "ComposeMail.user_is_at_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify blank mail can be sent",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2p"
    },
    {
      "name": "@f2pblank"
    }
  ]
});
formatter.step({
  "name": "user clicks on profile menu",
  "keyword": "When "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on inbox option",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_inbox_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on compose icon",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_compose_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs initials \"ami\" and selects recipient \"amit xyz\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_inputs_initials_and_selects_recipient(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user inputs subject \"Test mail new test\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_inputs_subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on send mail",
  "keyword": "And "
});
formatter.match({
  "location": "ComposeMail.user_clicks_on_send_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mail sent successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComposeMail.mail_sent_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});