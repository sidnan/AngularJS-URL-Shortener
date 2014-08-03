

var valid = element(by.binding('bublyForm.input.$valid'));
var input = element(by.model('typein.url'));
 
it('should be invalid if empty', function() {
  input.clear();
  input.sendKeys('');
 
 
  expect(valid.getText()).toContain('false');
});
 
it('should be invalid if not url', function() {
  input.clear();
  input.sendKeys('box');
 
  expect(valid.getText()).toContain('false');
});