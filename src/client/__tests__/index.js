import Jasmine from 'jasmine'; // eslint-disable-line import/no-extraneous-dependencies
import SpecReporter from 'jasmine-spec-reporter'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import jsdom from './jsdom';

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_dir: 'src/client',
  spec_files: ['**/__tests__/*-test.{js,jsx}'],
});
jasmine.configureDefaultReporter({ print: () => {} });
jasmine.env.addReporter(new SpecReporter());
jasmine.env.beforeEach(jsdom);
jasmine.execute();
