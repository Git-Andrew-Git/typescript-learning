/**
 * Fonction qui prend en paramètre un tableau d'entiers positifs et retourne le premier.
 * 
 * Retourne -1 si le tableau est vide.
 */
export function getFirstNumber(posNum: number[]): number {
    return posNum?.[0] ?? -1
}

/**
 * Retourne le dernier élément d'un tableau de string
 * 
 * @param songs Liste de chansons
 * @returns La dernière chaîne de caractères
 */
export function getLastSongPlayed(songs: string[]): string {
    return songs?.[songs.length-1] ?? "0 song found"
}

/**
 * Retrouve le mot le plus long d'un tableau de strings.
 * 
 * Afin de retrouver le mot le plus long vous pouvez utiliser une approche basée sur "reduce".
 * 
 * Pour apprendre à vous servir de "reduce" : https://medium.com/free-code-camp/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#720b
 */
export function findLongestWord(words: string[]): string {
    if (words.length == 0) {
        return "0 words found"
    }
    const longestWord: string = words.reduce(function(longest: string, current: string): string{
        if (current.length>longest.length) {
            return current
        } else {
            return longest
        }
    }, "")
    return longestWord
}

/**
 * Crée et initialise un tableau avec une valeur par défaut.
 * 
 * @param length La taille du tableau à créer (number)
 * @param defaultValue La valeur par défaut (string)
 */
export function fillArrayWithDefaultValue(taille: number, vDef: string): string[] {
    const arr: string [] = new Array(taille).fill(vDef);
    return arr
}

/**
 * Trie un tableau de chaînes de caractères par taille croissante de chaîne.
 * 
 * Pour trier le tableau vous pourrez utiliser la méthode "sort()" associée à une fonction de comparaison : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
 * 
 * Attention : la fonction doit renvoyer un NOUVEAU TABLEAU (nouvelle instance) et non pas celui passé en paramètre. Comment faire ?
 * 
 * @param arrayToSort Le tableau de chaînes de caractères à trier
 * @returns Le tableau trié
 */
export function sortBySize(arrayToSort: string[]): string[] {
    const newArr: string[] = arrayToSort.slice();
    if (newArr.length == 0) {
        newArr[0] = "0 string found"
    }
    newArr.sort((a, b) => a.length - b.length);
    return newArr;
}

// ----------- TABLEAUX AVEC DES UNIONS -----------

/**
 * Additionne les éléments d'un tableau qu'ils soient de type "number" ou "string".
 * 
 * @param array Utilisation d'un tableau avec types multiples : https://www.geeksforgeeks.org/defining-array-with-multiple-types-in-typescript/
 * @returns Le résultat de la somme de type "number"
 */
type NumStr = number | string

export function sumStringsAndNumbers(arrNumStr: NumStr[]): number {
  return arrNumStr.reduce((prev: number, current: NumStr) => {
    const num = typeof current === 'string' ? Number(current) : current
    return prev + num
  }, 0)
}

/**
 * Traite un tableau pouvant contenir des "string" mais également des éléments "null".
 * Cette fonction est chargée de supprimer toutes les valeurs null et de garder les "srings".
 * 
 * Pro-tip : renseignez vous sur la fonction "filter" : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *  
 * @param array Un tableau pouvant contenir des "string" mais également des éléments "null"
 * @returns Tableau de chaînes de caractères résultat
 */
type StrNull = string | null

export function stringsOnly(array: StrNull[]): string[] {
  return array.filter((elem): elem is string => elem !== null)
}

// ----------- TUPLES -----------

/**
 * Transforme un tuple contenant des informations d'utilisateur en un nom d'utilisateur arbitraire.
 * 
 * Par exemple :
 * - generateUsername(['John', 'Smith', 1980]) doit retourner 'smithjo_1980'
 * - generateUsername(['Bobby', 'Fallon', 1995]) should return 'fallonbo_1995'
 * 
 * @param userInfo Un tuple contenant les informations utilisateur
 * @returns Le nom utilisateur généré.
 */
export function generateUsername(userInfo: NumStr[]): string {
    if (userInfo.length !== 3) {
        return 'error: 0 info found'
    }
    
    const res = userInfo[1].toString().toLowerCase() + userInfo[0].toString().toLowerCase().slice(0, 2) + '_' + userInfo[2].toString();
    return res;
}

/**
 * Enum utilisée pour définir 4 points cardinaux
 * TODO : à compléter avec {North, South, East, West}
 */
export enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

/**
 * Déplace un point sur un carte 2D (repère orthonormé)
 *
 *        ^ N
 *        |
 *        |
 * W <--[0, 0]--> E 
 *        |
 *        |
 *        S
 * 
 * Par exemple :
 * - getNextMapCoord([0, 0], Direction.North) doit retourner [0, 1]
 * - getNextMapCoord([0, 0], Direction.East)doit retourner [1, 0]
 * 
 * @param coordinates Tuple contenant des coordonnées le premier élément est la position sur l'axe des abscisses, la seconde sur l'axe des ordonnées
 * @param direction Enum présentant une direction (North, South, East, West)
 * @returns Les nouvelles coordonnées (tuple)
 */

export function getNextMapCoord(coordinates: number[], direction: Direction): number[] { 
    if (coordinates.length != 2) {
        throw console.error('error: inproper format for starting coordiantes');
         
    }
    switch (direction) {
      case 'North':
        coordinates[1] += 1
        break
      case 'South':
        coordinates[1] -= 1
        break
      case 'East':
        coordinates[0] += 1
        break
      case 'West':
        coordinates[0] -= 1
        break
    }
    return coordinates;
}
