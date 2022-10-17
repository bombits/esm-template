/** 
 * this import:
 * import { React } from './deps'
 * is mandatory in all .jsx in order to import dependencies from CDN's
 * */
import { React }  from './deps'
import { hello } from './hello'

export function MyESModule(){
  return (
    <div>
      { hello( 'esm' ) }
    </div>
  )
}
