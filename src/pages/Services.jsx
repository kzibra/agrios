const Services = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      {/* Первый блок с картинками */}
      <div className="flex gap-5 justify-center items-center">
        {[1, 2, 3, 4].map((num, index) => (
          <img 
            key={num}
            src={`src/assets/services/serimg${num}.svg`}
            alt={`service-${num}`}
            className={`
              w-[300px] h-auto
              transform transition-all duration-300 
              hover:scale-110 hover:-translate-y-2 cursor-pointer
              animate-[fadeIn_0.5s_ease-in_forwards]
            `}
            style={{ animationDelay: `${index * 200}ms` }}
          />
        ))}
      </div>

      {/* Блок с большими карточками */}
      <div className="w-full">
        <img 
          src="src/assets/services/farm.svg" 
          alt="farm" 
        />
        <div className="relative overflow-x-hidden">
          <img className="h-170 object-cover w-full"
            src="https://s3-alpha-sig.figma.com/img/4dd8/f682/1d480a43b8d523b9ec5a686d97d78cca?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OceABgkVEBBCdcFnTJwGeOS9BEHXXP9pZkQuhbzCN9f49IR6GjA3x4olwlwlsGyogMFVOs2TzJQFnzqEsp6Xiz2gijiBble1xO03v20fGGzpKTvulBO1rWEx7qM9nmUL9Pqv-8cFbqdSfBLoWCSMFB2LYrW4ktejTaa8WngdXJt9N~lYszLu0N-DQdzfrxZCGVhZajGMrWWJnle4yG63jGLyYKy1stv5MuJB5rbY7pLAkBSujGxmKH4sqwgE1z0wOV7h11ZIilo4cwvBS0x2QV1imzCJhJDxlq2su4UGdKwSxE0tnFZPsmbqkenEUdBoTwwtHiN4mPELF2-FnRgx8Q__"
            alt="video preview banner"
          />
          <h1 className="absolute top-[25%] left-[15%] text-4xl">
              <span className="text-white font-medium text-7xl">
              Agriculture<br/>
              Matters to the<br/>
              Future of<br/>
              Development
              </span>
              </h1>   
          <div className="absolute top-[40%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer
                          transition-all duration-300 hover:scale-110 hover:bg-opacity-80">
                         
              {/* Иконка воспроизведения (треугольник) */}
              <div className="w-0 h-0 
                            border-t-[15px] border-t-transparent
                            border-l-[24px] border-l-black
                            border-b-[15px] border-b-transparent
                            ml-1">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Новый блок с карточками */}
      <div className="flex gap-8 justify-center items-center w-full px-10 -mt-32 relative z-10">
        {[1, 2, 3].map((num, index) => (
          <img 
            key={num}
            src={`src/assets/services/cards${num}.svg`}
            alt={`card-${num}`}
            className={`
              w-[400px] h-auto
              transform transition-all duration-300 
              hover:scale-105 cursor-pointer
              animate-[fadeIn_0.7s_ease-in_forwards]
            `}
            style={{ animationDelay: `${index * 300}ms` }}
          />
        ))}
      </div>

      {/* Блок с blyat.svg */}
      <div className="w-full px-10 -ml-50">
        <img 
          src="src/assets/services/blyat.svg"
          alt="blyat"
          className="w-full h-auto animate-[fadeIn_1s_ease-in_forwards]"
        />
      </div>

      {/* Блок с last.svg */}
      <div className="w-full mt-10">
        <img 
          src="src/assets/services/last.svg"
          alt="last block"
          className="w-full h-auto animate-[fadeIn_1s_ease-in_forwards]"
        />
      </div>
    </div>
  )
}

export default Services
