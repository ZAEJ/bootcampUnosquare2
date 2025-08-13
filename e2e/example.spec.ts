import { test, expect } from '@playwright/test';

async function login(page){
   
  await page.goto('https://www.saucedemo.com/');
  await page.locator(('[data-test="username"]')).fill('standard_user');
  await page.locator(('[data-test="password"]')).fill('secret_sauce');
  await page.locator('button', { name: 'Login' }).click();

   
}

test.beforeAll(async ({ page }) => {
  await login(page);
});


test('TC-LOGIN-001 - Login exitoso en SauceDemo', async ({ page }) => {
  // Paso 1: Abrir la página
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();

  // Paso 2: Ingresar usuario
  await page.fill('[data-test="username"]', 'standard_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');

  // Paso 3: Ingresar contraseña
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Paso 4: Click en login
  await page.click('[data-test="login-button"]');

  // Paso 5: Verificar Products
  await expect(page.locator('.title')).toHaveText('Products');
});

//test('TC-ShoppingCart-002 - Agregar producto al carrito', async ({ page }) => {
 
/*test('TC-CART-002 - Agregar producto al carrito', async ({ page }) => {
  // Paso 1: Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Paso 2: Obtener nombre del primer producto
  const firstProductName = await page.locator('.inventory_item_name').first().textContent();

  // Paso 3: Agregar al carrito
  await page.click('button[data-test^="add-to-cart"]');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Paso 4: Ir al carrito
  await page.click('.shopping_cart_link');

  // Paso 5: Verificar producto en el carrito
  const cartProductName = await page.locator('.inventory_item_name').textContent();
  await expect(cartProductName).toBe(firstProductName);
});*/
