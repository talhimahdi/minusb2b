import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import localStorageX from "../configs/localStorage";
import Link from "next/link";
import SendEmailForgetPassPopup from "../components/SendEmailForgetPassPopup";

export default function ConditionsGenerales() {
  const router = useRouter();

  return (
    <>
      <div className="max-w-6xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className=" space-y-16">
          <h3 className="uppercase justify-center text-2xl text-gray-900 font-londrina text-center">
            CONDITIONS GÉNÉRALES DE VENTE 2023
          </h3>
          <div className=" space-y-8">
            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 1. APPLICATION DES CONDITIONS GENERALES DE VENTE
              </h3>
              <div>
                Toute commande à la société Minus Editionsimplique
                l&apos;adhésion sans réserve auxprésentes Conditions Générales
                de Vente,ceci quelles que soient les dispositionscontraires
                pouvant figurer sur tout documentémanant de nos Clients, à moins
                qu&apos;ellesn&apos;aient été expressément acceptées aupréalable
                par écrit de notre part.Les présentes CGV s&apos;appliquent à
                compterdu 1er janvier 2021.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 2. COMMANDES
              </h3>
              <div>
                Les commandes reçues de l&apos;acheteur ne sontconsidérées
                acceptés qu&apos;après confirmationpar écrit de la société Minus
                Editions.Toutes les commandes livrées sont facturéesen compte
                ferme.Toute modification ou résolution de lacommande demandée
                par l&apos;acheteur nepourra être pris en considération que si
                elleintervient dans les 48 heures suivant laconfirmation de
                commande.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 3. PRIX
              </h3>
              <div>
                Les prix et barèmes de nos ouvrages fontl&apos;objet d&apos;un
                tarif, lequel est à la dispositionde tout acheteur visé par les
                présentes CGVsur simple demande.Les ouvrages sont facturés aux
                prix du tarifen vigueur à la date de la livraison
                ets&apos;entendent nets hors TVA, dans lesconditions du franco
                de port pour toutecommande en France Métropolitaine etBelgique
                dont le montant est supérieur à 250euros. Toute commande dont le
                montant estinférieur à 250 euros donne lieu à lafacturation de
                frais de port d&apos;un montant de15 euros HT.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 4. LIVRAISON TRANSPORT
              </h3>
              <div>
                L&apos;organisation des livraisons et le choix dutransporteur
                relèvent de la société MinusEditions.A titre indicatif, les
                délais usuels de livraisonsont de 7 jours ouvrés à compter
                dulendemain de la réception de la commande.Aucune pénalité
                systématique et forfaitairene pourra être facturée ou déduite
                d&apos;unrèglement de commande pour retard delivraison ou
                livraison non conforme oupartielle.Les livraisons doivent être
                vérifiées dès lamise à disposition. En cas de manque
                oud&apos;avarie, toutes réserves doivent êtrementionnées lors de
                la réception et portéessur le bon de livraison signé,
                conformémentà L 133-3 du code de commerce. Cesréserves doivent
                être communiquées par écritauprès de la société Minus Editions
                dans les48h suivant la livraison. A défaut, la sociétéMinus
                Editions ne pourra être tenueresponsable des avaries et
                manquants
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 5. RETOURS
              </h3>
              <div>
                Toutes nos ventes sont effectuées à compteferme, sans
                possibilité de retours àl&apos;exception faite :- des erreurs de
                fourniture de notre part- des ouvrages présentant une malfaçon-
                de conditions particulières entendues parécrit entre la société
                Minus Editions etl&apos;acheteur.Dans le cas de retours
                autorisés les frais deport sont à la charge du Client. Les
                ouvragesréceptionnés doivent être en parfait état etnon
                étiquetés. Dans le cas contraire, le retoursera refusé.Dans le
                cas de retour consécutif à une erreurou une malfaçon, le compte
                de l
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 6. CONDITIONS DEREGLEMENT
              </h3>
              <div>
                La facturation est faite au jour de livraison.Les factures sont
                payables à 30 jours netsdate de livraison, sauf en cas de
                premièrecommande ou les marchandises sontpayables à la
                livraison.Aucun escompte ne sera accordé pourpaiement
                anticipé.Les paiements se font au siège social de lasociété
                Minus Editions par chèque ouvirement. Toute échéance de paiement
                nonrespectée entrainera de plein droit et sansmise en demeure le
                paiement de indemnitéforfaitaire de 40 euros.Le défaut de
                paiement autorise également lasociété Minus Editions à suspendre
                leslivraisons jusqu&apos;au complet paiement.La société Minus
                Editions n&apos;accepte decompensation que dans le cadre de
                laréglementation en vigueur. A défaut, toutedéduction
                constituera un incident de paiement.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 7. RESERVE DE PROPRIETE
              </h3>
              <div>
                Les marchandises vendues restent lapropriété de la société Minus
                Editionsjusqu&apos;au au paiement intégral de leur prixde
                vente.Jusqu'à leur règlement complet, lesmarchandises sont sous
                la garde de leuracquéreur qui doit supporter les
                risquesqu&apos;elles pourraient subir ou occasionnerquelle
                qu&apos;en soit les causes.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 8. QUALITE -RESPONSABILITE
              </h3>
              <div>
                La société Minus Editions garantit laconformité des ouvrages
                livrés à l&apos;acheteur, àla réglementation, ainsi qu&apos;à
                sesspécifications.Toutefois, la prise en charge de dommagesliés,
                notamment, à un mauvais stockage duproduit ou à une livraison
                défectueuse auconsommateur final, et plus généralement àtoute
                opération hors du contrôle de la sociétéMinus Editions incombe
                au seul Acheteur.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 9. FIXATION ET PUBLICITEDES PRIX DE VENTECONSOMMATEURS
              </h3>
              <div>
                Selon la loi N°81-766 du 10 août 1981relative au prix du livre,
                nos ouvrages dotésd&apos;un code ISBN sont soumis à un prix
                fixeimposé par la société Minus Editions etbénéficient
                d&apos;une TVA à taux réduit de 5,5%sur le territoire de la
                France Métropolitaine.L&apos;acheteur est tenu de pratiquer un
                prixeffectif de vente public compris entre 95% et100% du prix
                fixé par la société MinusEditions.Pour les autres marchandises
                ne relevant pasde la loi relative au prix du livre, les
                Clientssont seuls responsables de la fixation et de lapublicité
                de leurs prix dans le cadre de laréglementation en vigueur.
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="uppercase text-base text-gray-900 font-londrina">
                ARTICLE 10. ATTRIBUTION DECOMPETENCE
              </h3>
              <div>
                Tous les litiges, quelle qu&apos;en soit la nature,seront soumis
                au Tribunal de Commerce deParis auquel il est fait
                expressémentattribution de juridiction et ce, même en casde
                pluralité de défenseurs ou d&apos;appel degarantie.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
