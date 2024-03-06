import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
    // Use Promise.all to collectively resolve promises
    Promise.all([uploadPhoto(), createUser()])
        .then(results => {
            const [photoResult, userResult] = results;
            console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
        })
        .catch(error => {
            console.error("Signup system offline");
        });
}

export default handleProfileSignup;
