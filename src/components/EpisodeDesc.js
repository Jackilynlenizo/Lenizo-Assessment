import React from 'react'

export const EpisodeDesc = (props) => {
  return (
    //per episode or right div
    <div className="xl:flex items-center py-3">
              <div className="rounded-2xl relative">
                <div className="xl:w-[418px] xl:h-[222px] w-[218px] h-[222px]">
                  <img
                    className="absolute w-full h-full rounded-2xl object-cover"
                    src={props.epimg}
                    alt=""
                  />
                </div>
              </div>

              <div className="font-outfit font-medium text-[20px] w-full py-2 xl:px-3 items-left">
                <h1 className="left-0">Episode {props.ep}</h1>
                <p className="text-[#747474] w-full">
                  {props.epdesc}
                </p>
              </div>
            </div>
  )
}
