// This is the entry point for Webpack. Here goes only the imports

// Project core (from now on, the order DO MATTER!)
import './module'
import './routes'
import './master-ctrl'
import './alert-ctrl'

//services
import './Source/models/posts/posts.service'
import './Source/models/company/company.service'

//controllers
import './Source/models/home/list.controller'
import './Source/models/posts/list.controller'
import './Source/models/posts/save.controller'

import './Source/models/company/list.controller'
import './Source/models/company/save.controller'