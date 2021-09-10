class AuthService {
    static #isLoggedIn = false;

    static isLoggedIn() {
        return this.#isLoggedIn;
    }
}

export default AuthService