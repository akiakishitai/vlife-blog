/**
 * 問い合わせフォームのデフォルト値を返す関数。
 */
export function defaultContactData(): import('../../gas/index').ContactForm.ContactData {
  return {
    name: '',
    email: '',
    message: '',
    type: 'regular',
    date: '1999-01-01',
  }
}
