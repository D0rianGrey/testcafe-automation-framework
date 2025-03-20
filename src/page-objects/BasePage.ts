import { Selector, t } from 'testcafe';
import { config } from '../config/config';

export class BasePage {
  constructor(public pagePath: string = '') {}

  /**
   * Открытие страницы
   */
  async navigate() {
    await t.navigateTo(`${config.baseUrl}${this.pagePath}`);
  }

  /**
   * Ожидание загрузки страницы
   */
  async waitForPageLoad() {
    await t.wait(1000); // Базовое ожидание
  }

  /**
   * Метод для ввода текста с предварительной очисткой поля
   */
  async typeText(selector: Selector, text: string) {
    await t
      .click(selector)
      .pressKey('ctrl+a delete') // Очистка текущего значения
      .typeText(selector, text);
  }

  /**
   * Проверка отображения элемента
   */
  async isElementVisible(selector: Selector, timeout: number = config.timeouts.elementTimeout): Promise<boolean> {
    try {
      return await selector.with({ visibilityCheck: true, timeout }).exists;
    } catch (error) {
      return false;
    }
  }

  /**
   * Получение текста элемента
   */
  async getElementText(selector: Selector): Promise<string> {
    return await selector.innerText;
  }
}