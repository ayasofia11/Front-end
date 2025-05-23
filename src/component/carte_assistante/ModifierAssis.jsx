import React from 'react'
import Topnav from '../nav/Topnav'
import SidebarDi from '../nav/SidebarDi'
import CarteModifAssis from './CarteModifAssis'
import TabsHeader from '../gestionassi/Tabsheader'

function ModifierAssis() {
  return (
    <div>
      <Topnav/>
      <SidebarDi/>
        <TabsHeader   tabs={[
          { label: "Chercheurs", path: "/directrice/chercheurDi" },
          { label: "Publications", path: "/directrice/publicationDi" },
          { label: "Assistante", path: "/directrice/Assistante" },
        ]} />
      <CarteModifAssis/>
    </div>
  )
}

export default ModifierAssis
