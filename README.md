# Cookie Experimentation and Development of Universal Submit Handling function.

This react app is very dressed down. There is no server or database setup needed, simply npm install to get dependencies and npm start to see a few tests with inputs and their values.

This Code essentially takes what could (will) be hundreds of inputs and their individual submissions and create a single handle input change function to create and store any inputs values in a persistent cookie. This is particularly useful as it relates to parts of tanzania where there will be connectivity issues, thus making it difficult to gather and store info in the database on a call. Thus, as it is entered, it will be stored locally until such time as it can be submitted.