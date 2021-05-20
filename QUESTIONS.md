1. What would you add to your solution if you had more time?
- More tests. Covering all sorts of use cases, test error handling and behaviour level testing.
- Better styling solution (i.e. Tailwind or Stitches)
- Would improve overall UI, candy look and feel as well as different screen width responsiveness

2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?
- Cross browser compatibility testing, support for mobile browsers
- Performance optimisations, bundle size budget
- Add observability (i.e. Datadog)

3. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
- True private class properties
```
class Person {
    #address = "Walstraat, Amsterdam, The Netherlands"
    private _phoneNumber = "123456789"

    getAddress() {
      return this.#address
    }
}

const person = new Person()

// @ts-ignore
console.log(person.#address); // when running this runtime error will be raised
// @ts-ignore
console.log(person._phoneNumber); // when executing this, it will return person's phone number
```

4. How would you track down a performance issue in production? Have you ever had to do this?
- Yes, many times. Observability tools like Datadog can help debugging issues in deployed environments. RUM, traces and logs when properly setup can give you complete picture of how your application behaves on users devices.
5. Can you describe common security concerns to consider for a frontend developer?
- Input sanitisation (something that React does by default) that prevents cross site scripting. Malicious code can be injected into a page through user inputs and executed on other users devices and lead to access to personal data.
- Keeping npm dependencies up to date helps prevent attacker use known vulnarabilities in old packages.
- Using captcha or similar to prevent bots from DDoS-ing application
6. How would you improve the Kraken API that you just used?
- The rule of thumb is that UI should be treated as a view layer and therefore contain as little logic as possible. Thus having to do less data massage and computation on the client will benefit the end user. High frequency web socket updates lead to high CPU usage especially on mobile devices, having to rerender tables with data is very expencive. Perhaps the first thing I would suggest is bringing the message payload closer to what UI renders so that FE needs to do less work to process it. Second, I would suggest increasing update crequency or batching. There is very little to no need (as far as I understand the nature of the service) to receive 10 to 20 updates per second. Batching can also be done on the client side to reduce the number of times react has to recompute and rerender DOM but that would only solve this problem partially.
