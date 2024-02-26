
import './CategorySub.css'

export default function () {
    let cat = ['Vehicles', 'Properties', 'Mobiles & Tablets', 'Jobs', 'Electronics & Appliances', 'Furniture & Decor', 'More Categories']
    let objarr = [
        { id: 1, name: 'sub 1', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'] },
        { id: 2, name: 'sub 2', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'] },
        { id: 3, name: 'sub 3', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'] },
        { id: 4, name: 'sub 4', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'] }]

    return (


        <div className=''>
            <div className='mb-5 flex-wrap flex text-x font-bold justify-between'>
                {cat.map((catigory, key) => {
                    return <div className="dropdown">

                        <p className='text-wrap fs-6 fw-bold' key={key}>{catigory}</p>

                        <div className="dropdown-content">
                            {objarr.map((sub, i) => {

                                return <a className='' href="#" key={i}>{sub.name}
                                
                                </a>
                            })}

                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}
