// This is the entry point for Webpack. Here goes only the imports
import './Source/libs/css/rdash.min.css'

// Project core (from now on, the order DO MATTER!)
import './module'
import './routes'
import './master-ctrl'
import './alert-ctrl'

//
import './Source/posts/list.controller'
import './Source/posts/posts.service'
import './Source/posts/save.controller'
