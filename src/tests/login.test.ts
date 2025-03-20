import { config } from '../config/config';
import { LoginPage } from '../page-objects/LoginPage';

fixture('Тесты входа в систему')
    .page(config.baseUrl);

test('Успешный вход стандартного пользователя', async t => {
    const loginPage = new LoginPage();

    await loginPage.login(
        config.credentials.standardUser.username,
        config.credentials.standardUser.password
    );

    // Проверка успешного входа (URL должен измениться)
    await t.expect(loginPage.errorMessage.exists).notOk('Не должно быть сообщения об ошибке');
    await t.expect(t.eval(() => window.location.pathname)).contains('/inventory.html', 'Должен произойти редирект на страницу инвентаря');
});

test('Неуспешный вход заблокированного пользователя', async t => {
    const loginPage = new LoginPage();

    await loginPage.login(
        config.credentials.lockedOutUser.username,
        config.credentials.lockedOutUser.password
    );

    // Проверка сообщения об ошибке
    await t.expect(loginPage.errorMessage.exists).ok('Должно появиться сообщение об ошибке');
    const errorText = await loginPage.getErrorMessage();
    await t.expect(errorText).contains('locked out', 'Текст ошибки должен содержать информацию о блокировке');
});