const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function clickMenuPreco() {
  // Configurar o Selenium WebDriver com o ChromeDriver
  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  // Criar uma instância do driver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navegar para o site
    await driver.get('https://www.zenvia.com/');

    // Aguardar até que o botão esteja visível
    await driver.wait(until.elementLocated(By.id('link-menu-precos')), 5000);

    // Clicar no botão
    const button = await driver.findElement(By.id('link-menu-precos'));
    await button.click();

    // Aguardar até que a nova página seja carregada
    await driver.wait(until.titleIs('Preços | Zenvia'), 5000);

    // Exemplo de ação na nova página (imprimir o título)
    const pageTitle = await driver.getTitle();
    console.log('Título da nova página:', pageTitle);
  } finally {
    // Fechar o navegador e encerrar o serviço do ChromeDriver
    await driver.quit();
    chrome.getDefaultService().driver_.quit();
  }
}

clickMenuPreco();
