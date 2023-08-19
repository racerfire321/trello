<div className='flex flex-col md:flex-row items-center p-5 rounded-b-2xl'>
          
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink to-[#0055D1] rounded-md filter blur-3xl opacity-50 z-30">
           <Image src="https://links.papareact.com/c2cdd5"
            alt='trello logo'
            width={300}
            height={100}
            className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
            />// */}
            <div className='flex items-center space-x-5 flex-1 justify-end w-full '>
              <form action="submit" className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                <FaSearch  className='h-6 w-6 text-gray-400'/>
              <input type="text" placeholder='search'
              className='flex-1 outline-none p-2' />
              <button type='submit' hidden/>
              <Avatar name='Bitisha Maharjan' round color='#0055D1'/>
              <div className=' flex items-center justify-center px-5 md:pt-5 py-2'>
                <p className='flex items-center p-5 text-sm font-light px-5 shadow-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
                
                
                <FaUserCircle className='inline-block h-10 w-10 text-[#0055D1] mx-4' />GPT is sumarizing your tack for the day
               </p>
                
              </div>
              </form>
            </div>
            </div>
        </div>