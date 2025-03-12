Feature('TestSignIn02');

Scenario('TC2 - Login to W3School successfully @test',  ({ I }) => {
    // Open the browser with the url "https://www.w3schools.com/"
    I.amOnPage('/');

    // Wait 3 seconds
    I.wait(3);

    // Then I will click the Login button on the right corner of the screen
    I.click("//a[@id='w3loginbtn']");

    // I wait 10 seconds to see the login form
    I.wait(10);

    // after that I will fill the form with the username and password
    I.fillField("//input[@name='email']", "joseph.testermail@gmail.com");
    I.wait(3);
    I.fillField("//input[@name='current-password']", "Admin@123");
    I.wait(3);

    // I will click the "Log in" button to see what's going on
    I.click("//button[@class='Button_button__URNp+ Button_primary__d2Jt3 Button_fullwidth__0HLEu']");
    I.wait(15);

    // I want to take a screenshot that the login form is successful
    I.saveScreenshot("ValidLogin.jpg");

    // I want to see the text "Hi, Joseph" that I login successfully
    I.see("Hi, Joseph");
}).tag("@test");
