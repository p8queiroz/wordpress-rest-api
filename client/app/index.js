// This is the entry point for Webpack. Here goes only the imports

// Project core (from now on, the order DO MATTER!)
import './module'
import './routes'
import './master-ctrl'
import './alert-ctrl'

//services
import './Source/posts/posts.service'
import './Source/company/company.service'

//controllers
import './Source/posts/list.controller'
import './Source/posts/save.controller'

import './Source/company/list.controller'
import './Source/company/save.controller'