 const lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

            // const newLyrics = lyrics.join(" ");
            // const reversLyrics = lyrics.reverse().join(" ")
            
            
            // function everyOtherWord(arr){
            // for(i = 0; i < lyrics.length; i++)
            //     if(i % 2 === 0){
            //         console.log(arr[i])
            //     }
            // }
            // everyOtherWord(lyrics.reverse())

            // const newLyrics = lyrics.join(' ')
            // const backwardsLyrics = lyrics.reverse().join(' ')

            function everyOtherWord(arr){
                const newArr = []
                for(let i = 0; i < arr.length; i++){
                    if(i % 2 === 0){
                    newArr.push(arr[i])
                       
                    }
                    return newArr.join('')
                }
            } console.log(everyOtherWord(lyrics))
            
            
            
           