import utils from '../utils';

describe('Settings', function () {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('settings are loaded', function () {
    const settings = this.app.electron.remote.getGlobal('settings');
    assert.typeOf(settings, 'object');
  });
});
