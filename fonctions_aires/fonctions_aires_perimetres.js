/**calcule le perimetre d'un rectangle
 * @author Jérémy
 * @param largeur type{entier} largeur du rectangle
 * @param longueur type {entier} longueur du rectangle
 * @return type {entier} perimetre du rectangle
**/

function perimetreRectangle(largeur,longueur)
{

    return((largeur+longueur)*2);

}

var result = perimetreRectangle(3,2);
console.log("Perimetre d'un rectangle de largeur 3 et longueur 2");
console.log(result);



/**calcule l'aire d'un rectangle
 * @author Jérémy
 * @param largeur type{entier} largeur du rectangle
 * @param longueur type {entier} longueur du rectangle
 * @return type {entier} aire du rectangle
**/
function aireRectangle(largeur,longueur)
{

    return((largeur*longueur));

}

var result = aireRectangle(3,2);
console.log("Aire d'un rectangle de largeur 3 et longueur 2");
console.log(result);



/**calcule le perimetre d'un cercle
 * @author Jérémy
 * @param rayon type{entier} rayon du cercle
 * @return type {entier} perimetre du cercle
**/
function perimetreCercle(rayon)
{

    const PI = 3.14;
    return((2*PI*rayon));

}

var result = perimetreCercle(3);
console.log("Perimetre d'un cercle de rayon 3");
console.log(result);

/**aire cercle*/
function aireCercle(rayon)
{
    const PI = 3.14;
    return((PI*rayon*rayon));

}

var result = aireCercle(3);
console.log("Aire d'un cercle de rayon 3");
console.log(result);



/**perimetre carre*/

function perimetreCarre (cote)
{
    return(perimetreRectangle(cote,cote));
}

var result = perimetreCarre(2);
console.log("Perimetre d'un carré de côté 3");
console.log(result);


/**aire carre*/

function aireCarre (cote)
{
    return(aireRectangle(cote,cote));
}

var result = aireCarre(2);
console.log("Aire d'un carré de côté 3");
console.log(result);

