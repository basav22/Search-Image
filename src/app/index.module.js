
import { runBlock } from './index.run';

import { SearchImageController } from './main/searchimage.ctrl';


angular.module('prj1', [])
  .run(runBlock)
  .controller('SearchImageController', SearchImageController);
