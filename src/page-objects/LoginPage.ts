import { Selector, t } from 'testcafe';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Селекторы элементов
  readonly usernameInput: Selector;
  readonly passwordInput: Selector;
  readonly loginButton: Selector;
  readonly errorMessage: Selector;

  constructor() {
    super('/'); // Путь к странице логина (в данном случае корневой путь)
    
    // Инициализация селекторов
    this.usernameInput = Selector('#user-name');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('#login-button');
    this.errorMessage = Selector('h3[data-test="error"]');
  }

  /**
   * Вход в систему
   */
  async login(username: string, password: string) {
    await this.typeText(this.usernameInput, username);
    await this.typeText(this.passwordInput, password);
    await t.click(this.loginButton);
  }

  /**
   * Получение текста ошибки
   */
  async getErrorMessage(): Promise<string> {
    return await this.getElementText(this.errorMessage);
  }
}