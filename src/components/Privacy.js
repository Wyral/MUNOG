import { useState } from "react";
import { LanguageSelector, Text } from "./TextBlock";

const Privacy = () => {
    const [language, setLanguage] = useState("en")

    return (
        <main>
            <LanguageSelector setLanguage={setLanguage} />

            {language == "en" ? <Text>
                <h2>Privacy Policy</h2>
                <p>
                    Personal data (usually referred to just as „data“ below) will only be
                    processed by us to the extent necessary and for the purpose of
                    providing a functional and user-friendly website, including its
                    contents, and the services offered there.
                </p>
                <p>
                    Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data
                    Protection Regulation (hereinafter referred to as the „GDPR“),
                    „processing“ refers to any operation or set of operations such as
                    collection, recording, organization, structuring, storage, adaptation,
                    alteration, retrieval, consultation, use, disclosure by transmission,
                    dissemination, or otherwise making available, alignment, or
                    combination, restriction, erasure, or destruction performed on
                    personal data, whether by automated means or not.
                </p>
                <p>
                    The following privacy policy is intended to inform you in particular
                    about the type, scope, purpose, duration, and legal basis for the
                    processing of such data either under our own control or in conjunction
                    with others. We also inform you below about the third-party components
                    we use to optimize our website and improve the user experience which
                    may result in said third parties also processing data they collect and
                    control.
                </p>
                <p>Our privacy policy is structured as follows:</p>
                <p>
                    I. Information about us as controllers of your data<br />II. The
                    rights of users and data subjects<br />III. Information about the data
                    processing
                </p>
                <h3>I. Information about us as controllers of your data</h3>
                <p>
                    The party responsible for this website (the „controller“) for purposes
                    of data protection law is:
                </p>
                <p>
                    Goldberg-Gymnasium Sindelfingen<br />Mrs. Prin. Dr. Veronika Knüppel<br />Frankenstraße 15<br />71065
                    Sindelfingen
                </p>
                <p>
                    Phone: 07031 9574-0<br />Fax: 07031 9574-14<br />E-mail: <a href="/cdn-cgi/l/email-protection#a6d4c3cdd2c9d4c7d2e6d4c3cdd2c9d4c7d288c1c9cac2c4c3d4c18bc1dfcbc8c7d5cfd3cb88c2c3"><span class="__cf_email__" data-cfemail="bac8dfd1ced5c8dbcefac8dfd1ced5c8dbce94ddd5d6ded8dfc8dd97ddc3d7d4dbc9d3cfd794dedf">[email&#160;protected]</span></a>
                </p>
                <p>
                    Please note that the telephone is only available at German times of the day.
                </p>
                <p>The controller’s data protection officer is:</p>
                <p>
                    [DSB – Vorname, Nachname]<br />Telefon: [DSB – Telefonnummer]<br />Telefax:
                    [DSB – Faxnummer]<br />E-Mail: [DSB – E-Mail] [The following information
                    must be added if an external data protection officer has been
                    appointed].
                </p>
                <p>
                    [DSB-Extern – Straße, Hausnummer]<br />[DSB-Extern – Postleitzahl, Ort]</p>
                <h3>II. The rights of users and data subjects</h3>
                <p>
                    With regard to the data processing to be described in more detail
                    below, users and data subjects have the right
                </p>
                <p>
                    - To confirmation of whether data concerning them is being processed,
                    information about the data being processed, further information
                    about the nature of the data processing, and copies of the data (cf.
                    also Art. 15 GDPR);
                    <br /><br />
                    - To correct or complete incorrect or incomplete data (cf. also Art.
                    16 GDPR);
                    <br /><br />
                    - To the immediate deletion of data concerning them (cf. also Art. 17
                    DSGVO), or, alternatively, if further processing is necessary as
                    stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per
                    Art. 18 GDPR;
                    <br /><br />
                    - To receive copies of the data concerning them and/or provided by
                    them and to have the same transmitted to other providers/controllers
                    (cf. also Art. 20 GDPR);
                    <br /><br />
                    - To file complaints with the supervisory authority if they believe
                    that data concerning them is being processed by the controller in
                    breach of data protection provisions (see also Art. 77 GDPR).
                </p>
                <p>
                    In addition, the controller is obliged to inform all recipients to
                    whom it discloses data of any such corrections, deletions, or
                    restrictions placed on processing the same per Art. 16, 17 Para. 1, 18
                    GDPR. However, this obligation does not apply if such notification is
                    impossible or involves a disproportionate effort. Nevertheless, users
                    have a right to information about these recipients.
                </p>
                <p>
                    <strong>Likewise, under Art. 21 GDPR, users and data subjects have the
                        right to object to the controller’s future processing of their data
                        pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection
                        to data processing for the purpose of direct advertising is
                        permissible.</strong>
                </p>
                <h3>III. Information about the data processing</h3>
                <p>
                    Your data processed when using our website will be deleted or blocked
                    as soon as the purpose for its storage ceases to apply, provided the
                    deletion of the same is not in breach of any statutory storage
                    obligations or unless otherwise stipulated below.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Contact</h4>
                <p>
                    If you contact us via email or the contact form, the data you provide
                    will be used for the purpose of processing your request. We must have
                    this data in order to process and answer your inquiry; otherwise we
                    will not be able to answer it in full or at all.
                </p>
                <p>
                    The legal basis for this data processing is Art. 6 Para. 1 lit. b)
                    GDPR.
                </p>
                <p>
                    Your data will be deleted once we have fully answered your inquiry and
                    there is no further legal obligation to store your data, such as if an
                    order or contract resulted therefrom.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Newsletter</h4>
                <p>
                    If you register for our free newsletter, the data requested from you
                    for this purpose, i.e. your email address and, optionally, your name
                    and address, will be sent to us. We also store the IP address of your
                    computer and the date and time of your registration. During the
                    registration process, we will obtain your consent to receive this
                    newsletter and the type of content it will offer, with reference made
                    to this privacy policy. The data collected will be used exclusively to
                    send the newsletter and will not be passed on to third parties.
                </p>
                <p>The legal basis for this is Art. 6 Para. 1 lit. a) GDPR.</p>
                <p>
                    You may revoke your prior consent to receive this newsletter under
                    Art. 7 Para. 3 GDPR with future effect. All you have to do is inform
                    us that you are revoking your consent or click on the unsubscribe link
                    contained in each newsletter.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Facebook</h4>
                <p>
                    To advertise our products and services as well as to communicate with
                    interested parties or customers, we have a presence on the Facebook
                    platform.
                </p>
                <p>
                    On this social media platform, we are jointly responsible with Meta
                    Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
                </p>
                <p>
                    The data protection officer of Facebook can be reached via this
                    contact form:
                </p>
                <p>
                    <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
                </p>
                <p>
                    We have defined the joint responsibility in an agreement regarding the
                    respective obligations within the meaning of the GDPR. This agreement,
                    which sets out the reciprocal obligations, is available at the
                    following link:
                </p>
                <p>
                    <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
                </p>
                <p>
                    The legal basis for the processing of the resulting and subsequently
                    disclosed personal data is Art. 6 para. 1 lit. f GDPR. Our legitimate
                    interest lies in the analysis, communication, sales, and promotion of
                    our products and services.
                </p>
                <p>
                    The legal basis may also be your consent per Art. 6 para. 1 lit. a
                    GDPR granted to the platform operator. Per Art. 7 para. 3 GDPR, you
                    may revoke this consent with the platform operator at any time with
                    future effect.
                </p>
                <p>
                    When accessing our online presence on the Facebook platform, Facebook
                    Ireland Ltd. as the operator of the platform in the EU will process
                    your data (e.g. personal information, IP address, etc.).
                </p>
                <p>
                    This data of the user is used for statistical information on the use
                    of our company presence on Facebook. Facebook Ireland Ltd. uses this
                    data for market research and advertising purposes as well as for the
                    creation of user profiles. Based on these profiles, Facebook Ireland
                    Ltd. can provide advertising both within and outside of Facebook based
                    on your interests. If you are logged into Facebook at the time you
                    access our site, Facebook Ireland Ltd. will also link this data to
                    your user account.
                </p>
                <p>
                    If you contact us via Facebook, the personal data your provide at that
                    time will be used to process the request. We will delete this data
                    once we have completely responded to your query, unless there are
                    legal obligations to retain the data, such as for subsequent
                    fulfillment of contracts.
                </p>
                <p>
                    Facebook Ireland Ltd. might also set cookies when processing your
                    data.
                </p>
                <p>
                    If you do not agree to this processing, you have the option of
                    preventing the installation of cookies by making the appropriate
                    settings in your browser. Cookies that have already been saved can be
                    deleted at any time. The instructions to do this depend on the browser
                    and system being used. For Flash cookies, the processing cannot be
                    prevented by the settings in your browser, but instead by making the
                    appropriate settings in your Flash player. If you prevent or restrict
                    the installation of cookies, not all of the functions of Facebook may
                    be fully usable.
                </p>
                <p>
                    Details on the processing activities, their suppression, and the
                    deletion of the data processed by Facebook can be found in its privacy
                    policy:
                </p>
                <p>
                    <a href="https://www.facebook.com/privacy/explanation" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/privacy/explanation</a>
                </p>
                <p>
                    It cannot be excluded that the processing by Facebook Ireland Ltd.
                    will also take place in the United States by Meta Platforms, Inc.,
                    1601 Willow Road, Menlo Park, California 94025.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
                <p>
                    To advertise our products and services as well as to communicate with
                    interested parties or customers, we have a presence on the Instagram
                    platform.
                </p>
                <p>
                    On this social media platform, we are jointly responsible with Meta
                    Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
                </p>
                <p>
                    The data protection officer of Instagram can be reached via this
                    contact form:
                </p>
                <p>
                    <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
                </p>
                <p>
                    We have defined the joint responsibility in an agreement regarding the
                    respective obligations within the meaning of the GDPR. This agreement,
                    which sets out the reciprocal obligations, is available at the
                    following link:
                </p>
                <p>
                    <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
                </p>
                <p>
                    The legal basis for the processing of the resulting and subsequently
                    disclosed personal data is Art. 6 para. 1 lit. f GDPR. Our legitimate
                    interest lies in the analysis, communication, sales, and promotion of
                    our products and services.
                </p>
                <p>
                    The legal basis may also be your consent per Art. 6 para. 1 lit. a
                    GDPR granted to the platform operator. Per Art. 7 para. 3 GDPR, you
                    may revoke this consent with the platform operator at any time with
                    future effect.
                </p>
                <p>
                    When accessing our online presence on the Instagram platform, Facebook
                    Ireland Ltd. as the operator of the platform in the EU will process
                    your data (e.g. personal information, IP address, etc.).
                </p>
                <p>
                    This data of the user is used for statistical information on the use
                    of our company presence on Instagram. Facebook Ireland Ltd. uses this
                    data for market research and advertising purposes as well as for the
                    creation of user profiles. Based on these profiles, Facebook Ireland
                    Ltd. can provide advertising both within and outside of Instagram
                    based on your interests. If you are logged into Instagram at the time
                    you access our site, Facebook Ireland Ltd. will also link this data to
                    your user account.
                </p>
                <p>
                    If you contact us via Instagram, the personal data your provide at
                    that time will be used to process the request. We will delete this
                    data once we have completely responded to your query, unless there are
                    legal obligations to retain the data, such as for subsequent
                    fulfillment of contracts.
                </p>
                <p>
                    Facebook Ireland Ltd. might also set cookies when processing your
                    data.
                </p>
                <p>
                    If you do not agree to this processing, you have the option of
                    preventing the installation of cookies by making the appropriate
                    settings in your browser. Cookies that have already been saved can be
                    deleted at any time. The instructions to do this depend on the browser
                    and system being used. For Flash cookies, the processing cannot be
                    prevented by the settings in your browser, but instead by making the
                    appropriate settings in your Flash player. If you prevent or restrict
                    the installation of cookies, not all of the functions of Instagram may
                    be fully usable.
                </p>
                <p>
                    Details on the processing activities, their suppression, and the
                    deletion of the data processed by Instagram can be found in its
                    privacy policy:
                </p>
                <p>
                    <a href="https://help.instagram.com/519522125107875" target="_blank"
                        rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
                </p>
                <p>
                    It cannot be excluded that the processing by Facebook Ireland Ltd.
                    will also take place in the United States by Meta Platforms, Inc.,
                    1601 Willow Road, Menlo Park, California 94025.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Twitter</h4>
                <p>
                    We maintain an online presence on Twitter to present our company and
                    our services and to communicate with customers/prospects. Twitter is a
                    service provided by Twitter Inc., 1355 Market Street, Suite 900, San
                    Francisco, CA 94103, USA.
                </p>
                <p>
                    We would like to point out that this might cause user data to be
                    processed outside the European Union, particularly in the United
                    States. This may increase risks for users that, for example, may make
                    subsequent access to the user data more difficult. We also do not have
                    access to this user data. Access is only available to Twitter.
                </p>
                <p>The privacy policy of Twitter can be found at</p>
                <p>
                    <a href="https://twitter.com/de/privacy" target="_blank"
                        rel="noopener nofollow">https://twitter.com/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    We maintain an online presence on YouTube to present our company and
                    our services and to communicate with customers/prospects. YouTube is a
                    service of Google Ireland Limited, Gordon House, Barrow Street, Dublin
                    4, Ireland, a subsidiary of Google LLC, 1600 Amphitheater Parkway,
                    Mountain View, CA 94043 USA.
                </p>
                <p>
                    We would like to point out that this might cause user data to be
                    processed outside the European Union, particularly in the United
                    States. This may increase risks for users that, for example, may make
                    subsequent access to the user data more difficult. We also do not have
                    access to this user data. Access is only available to YouTube.
                </p>
                <p>The YouTube privacy policy can be found here:</p>
                <p>
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">General introduction</h4>
                <h4 class="jet-listing-dynamic-field__content">Facebook</h4>
                <p>
                    Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, a
                    subsidiary of Facebook Inc., 1601 S. California Ave., Palo Alto, CA
                    94304, USA.
                </p>
                <p>
                    Privacy Policy:
                    <a href="https://www.facebook.com/policy.php" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/policy.php</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
                <p>
                    Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, a
                    subsidiary of Facebook Inc., 1601 S. California Ave., Palo Alto, CA
                    94304, USA.
                </p>
                <p>
                    Privacy Policy:
                    <a href="https://help.instagram.com/519522125107875" target="_blank"
                        rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                    a subsidiary of Google LLC, 1600 Amphitheatre Parkway, Mountain View,
                    CA 94043 USA
                </p>
                <p>
                    Privacy Policy:
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">FontAwesome</h4>
                <p>
                    In order to be able to display fonts and visual elements of our
                    website, we use FontAwesome’s external fonts.&nbsp; FontAwesome is a
                    service of
                    Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA,
                    hereinafter referred to as „FontAwesome“.
                </p>
                <p>
                    When you access our website, a connection is established to the
                    FontAwesome server in the USA in order to enable and update the
                    display of fonts and visual elements.
                </p>
                <p>
                    The legal basis is Art.&nbsp; 6 para. 1 lit. f) GDPR. Our legitimate
                    interest lies in the optimisation and economic operation of our
                    website.
                </p>
                <p>
                    By connecting to the FontAwesome server when you access our website,
                    FontAwesome can determine from which website your request was sent and
                    to which IP address the font should be sent.
                </p>
                <p>At
                    <a href="https://fontawesome.com/privacy" target="_blank"
                        rel="noopener nofollow">https://fontawesome.com/privacy</a>
                    FontAwesome offers further information, in particular on the options
                    for preventing data use.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Google Fonts</h4>
                <p>
                    Our website uses Google Fonts to display external fonts. This is a
                    service provided by Google Ireland Limited, Gordon House, Barrow
                    Street, Dublin 4, Irland (hereinafter: Google).
                </p>
                <p>
                    To enable the display of certain fonts on our website, a connection to
                    the Google server in the USA is established whenever our website is
                    accessed.
                </p>
                <p>
                    The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate
                    interest lies in the optimization and economic operation of our site.
                </p>
                <p>
                    When you access our site, a connection to Google is established from
                    which Google can identify the site from which your request has been
                    sent and to which IP address the fonts are being transmitted for
                    display.
                </p>
                <p>Google offers detailed information at
                    <a href="https://adssettings.google.com/authenticated" target="_blank"
                        rel="noopener nofollow">https://adssettings.google.com/authenticated</a>
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy </a>in particular on options for
                    preventing the use of data.
                </p>
                <h4 class="jet-listing-dynamic-field__content">jQuery CDN</h4>
                <p>
                    We use the service jQuery CDN, a Content Delivery Network („CDN“), on
                    our website to optimise the retrieval speed, the design and
                    presentation of the content of our website on different devices.&nbsp;
                </p>
                <p>
                    This is a service of the jQuery Foundation, hereinafter referred to as
                    „jQuery“. jQuery is distributed for the JS Foundation via the
                    StackPath CDN.
                </p>
                <p>
                    In order to be able to deliver the content of our website quickly, the
                    service uses so-called JavaScript libraries.&nbsp; Relevant files are
                    loaded from the CDN server if they are not already available in your
                    browser cache when you visit another website.&nbsp; In the case of a
                    connection to the CDN server, your IP address is recorded.&nbsp; It
                    cannot be ruled out that a connection will be established to a server
                    outside the EU.
                </p>
                <p>
                    The legal basis is Art.&nbsp; 6 para. 1 lit. f) GDPR. Our legitimate
                    interest lies in speeding up loading times and protecting our website,
                    as well as in analysing and optimising our website.
                </p>
                <p>
                    To totally prevent the execution of jQuery’s JavaScript code, you can
                    install a so-called JavaScript blocker, such as noscript.net or
                    ghostery.com. . If you were to prevent or restrict the execution of
                    the Java Script code, this can mean that for technical reasons not all
                    the content and functions of our website may be available.
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    We use YouTube on our website. This is a video portal operated by
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                    hereinafter referred to as „YouTube“.
                </p>
                <p>
                    We use YouTube in its advanced privacy mode to show you videos. In
                    case you have granted your consent to this processing the legal basis
                    is Article 6 para. 1 lit. a GDPR. The legal basis can also be Article
                    6 para. 1 lit. f GDPR. Our legitimate interest lies in improving the
                    quality of our website. According to YouTube, the advanced privacy
                    mode means that the data specified below will only be transmitted to
                    the YouTube server if you actually start a video.
                </p>
                <p>
                    Without this mode, a connection to the YouTube server in the USA will
                    be established as soon as you access any of our webpages on which a
                    YouTube video is embedded.
                </p>
                <p>
                    This connection is required in order to be able to display the
                    respective video on our website within your browser. YouTube will
                    record and process at a minimum your IP address, the date and time the
                    video was displayed, as well as the website you visited. In addition,
                    a connection to the DoubleClick advertising network of Google is
                    established.
                </p>
                <p>
                    If you are logged in to YouTube when you access our site, YouTube will
                    assign the connection information to your YouTube account. To prevent
                    this, you must either log out of YouTube before visiting our site or
                    make the appropriate settings in your YouTube account.
                </p>
                <p>
                    For the purpose of functionality and analysis of usage behavior,
                    YouTube permanently stores cookies on your device via your browser. If
                    you do not agree to this processing, you have the option of preventing
                    the installation of cookies by making the appropriate settings in your
                    browser. Further details can be found in the section about cookies
                    above.
                </p>
                <p>
                    Further information about the collection and use of data as well as
                    your rights and protection options in Google’s privacy policy found at
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <p>
                    <a href="https://www.generator-datenschutzerklärung.de" target="_blank" rel="noopener">Model Data
                        Protection Statement</a>
                    for
                    <a href="https://www.ratgeberrecht.eu/" target="_blank" rel="noopener">Anwaltskanzlei Weiß &amp;
                        Partner</a>
                </p>
            </Text> : null}
            {language == "de" ? <Text>
                <h2>Datenschutzerklärung</h2>
                <p>
                    Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt)
                    werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
                    Bereitstellung eines funktionsfähigen und nutzerfreundlichen
                    Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
                    Leistungen, verarbeitet.
                </p>
                <p>
                    Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
                    Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt
                    als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
                    ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang
                    mit personenbezogenen Daten, wie das Erheben, das Erfassen, die
                    Organisation, das Ordnen, die Speicherung, die Anpassung oder
                    Veränderung, das Auslesen, das Abfragen, die Verwendung, die
                    Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der
                    Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
                    das Löschen oder die Vernichtung.
                </p>
                <p>
                    Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
                    insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
                    Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
                    gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
                    entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
                    Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
                    eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in
                    wiederum eigener Verantwortung verarbeiten.
                </p>
                <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
                <p>
                    I. Informationen über uns als Verantwortliche<br />II. Rechte der
                    Nutzer und Betroffenen<br />III. Informationen zur Datenverarbeitung
                </p>
                <h3>I. Informationen über uns als Verantwortliche</h3>
                <p>
                    Verantwortlicher Anbieter dieses Internetauftritts im
                    datenschutzrechtlichen Sinne ist:
                </p>
                <p>
                    Goldberg-Gymnasium Sindelfingen<br />Frau OStD' Dr. Veronika Knüppel<br />Frankenstraße 15<br />71065
                    Sindelfingen
                </p>
                <p>
                    Telefon: 07031 9574-0<br />Telefax: 07031 9574-14<br />E-Mail: <a href="/cdn-cgi/l/email-protection#1b697e706f74697a6f5b697e706f74697a6f357c74777f797e697c367c6276757a68726e76357f7e"><span class="__cf_email__" data-cfemail="e496818f908b968590a496818f908b968590ca838b888086819683c9839d898a85978d9189ca8081">[email&#160;protected]</span></a>
                </p>
                <p>Datenschutzbeauftragte/r beim Anbieter ist:</p>
                <p>
                    [DSB – Vorname, Nachname]<br />Telefon: [DSB – Telefonnummer]<br />Telefax:
                    [DSB – Faxnummer]<br />E-Mail: [DSB – E-Mail] [nachfolgende Angaben sind
                    zu ergänzen, sofern ein Externer Datenschutzbeauftragter bestellt ist]
                    [DSB-Extern – Straße, Hausnummer]<br />[DSB-Extern – Postleitzahl, Ort]
                </p>
                <h3>II. Rechte der Nutzer und Betroffenen</h3>
                <p>
                    Mit Blick auf die nachfolgend noch näher beschriebene
                    Datenverarbeitung haben die Nutzer und Betroffenen das Recht
                </p>
                <p>
                    - Auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
                    Auskunft über die verarbeiteten Daten, auf weitere Informationen
                    über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch
                    Art. 15 DSGVO);
                    <br /><br />
                    - Auf Berichtigung oder Vervollständigung unrichtiger bzw.
                    unvollständiger Daten (vgl. auch Art. 16 DSGVO);
                    <br /><br />
                    - Auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch
                    Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung
                    gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
                    Verarbeitung nach Maßgabe von Art. 18 DSGVO;
                    <br /><br />
                    - Auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
                    und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
                    (vgl. auch Art. 20 DSGVO);
                    <br /><br />
                    - Auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der
                    Ansicht sind, dass die sie betreffenden Daten durch den Anbieter
                    unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet
                    werden (vgl. auch Art. 77 DSGVO).
                </p>
                <p>
                    Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger,
                    denen gegenüber Daten durch den Anbieter offengelegt worden sind, über
                    jedwede Berichtigung oder Löschung von Daten oder die Einschränkung
                    der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO
                    erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht,
                    soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen
                    Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf
                    Auskunft über diese Empfänger.
                </p>
                <p>
                    <strong>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das
                        Recht auf Widerspruch gegen die künftige Verarbeitung der sie
                        betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe
                        von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist
                        ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
                        Direktwerbung statthaft.</strong>
                </p>
                <h3>III. Informationen zur Datenverarbeitung</h3>
                <p>
                    Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
                    gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
                    Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
                    entgegenstehen und nachfolgend keine anderslautenden Angaben zu
                    einzelnen Verarbeitungsverfahren gemacht werden.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Kontaktanfragen / Kontaktmöglichkeit</h4>
                <p>
                    Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
                    werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
                    Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
                    Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung
                    können wir Ihre Anfrage nicht oder allenfalls eingeschränkt
                    beantworten.
                </p>
                <p>
                    Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b)
                    DSGVO.
                </p>
                <p>
                    Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend
                    beantwortet worden ist und der Löschung keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig
                    anschließenden Vertragsabwicklung.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Newsletter</h4>
                <p>
                    Falls Sie sich für unseren kostenlosen Newsletter anmelden, werden die
                    von Ihnen hierzu abgefragten Daten, also Ihre E-Mail-Adresse sowie –
                    optional – Ihr Name und Ihre Anschrift, an uns übermittelt.
                    Gleichzeitig speichern wir die IP-Adresse des Internetanschlusses von
                    dem aus Sie auf unseren Internetauftritt zugreifen sowie Datum und
                    Uhrzeit Ihrer Anmeldung. Im Rahmen des weiteren Anmeldevorgangs werden
                    wir Ihre Einwilligung in die Übersendung des Newsletters einholen, den
                    Inhalt konkret beschreiben und auf diese Datenschutzerklärung
                    verwiesen. Die dabei erhobenen Daten verwenden wir ausschließlich für
                    den Newsletter-Versand – sie werden deshalb insbesondere auch nicht an
                    Dritte weitergegeben.
                </p>
                <p>Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO.</p>
                <p>
                    Die Einwilligung in den Newsletter-Versand können Sie gemäß Art. 7
                    Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu
                    müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen oder
                    den in jedem Newsletter enthaltenen Abmeldelink betätigen.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Facebook</h4>
                <p>
                    Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation
                    mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der
                    Plattform Facebook.
                </p>
                <p>
                    Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta
                    Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland,
                    verantwortlich.
                </p>
                <p>
                    Der Datenschutzbeauftragte von Facebook kann über ein Kontaktformular
                    erreicht werden:
                </p>
                <p>
                    <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
                </p>
                <p>
                    Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung
                    bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt.
                    Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen
                    ergeben, ist unter dem folgenden Link abrufbar:
                </p>
                <p>
                    <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
                </p>
                <p>
                    Rechtsgrundlage für die dadurch erfolgende und nachfolgend
                    wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6
                    Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der
                    Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer
                    Produkte und Leistungen.
                </p>
                <p>
                    Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6
                    Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die
                    Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit
                    durch eine Mitteilung an den Plattformbetreiber für die Zukunft
                    widerrufen.
                </p>
                <p>
                    Bei dem Aufruf unseres Onlineauftritts auf der Plattform Facebook
                    werden von der Facebook Ireland Ltd. als Betreiberin der Plattform in
                    der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse
                    etc.) verarbeitet.
                </p>
                <p>
                    Diese Daten des Nutzers dienen zu statistischen Informationen über die
                    Inanspruchnahme unserer Firmenpräsenz auf Facebook. Die Facebook
                    Ireland Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken
                    sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile
                    ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer
                    innerhalb und außerhalb von Facebook interessenbezogen zu bewerben.
                    Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf
                    Facebook eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten
                    mit dem jeweiligen Nutzerkonto verknüpfen.
                </p>
                <p>
                    Im Falle einer Kontaktaufnahme des Nutzers über Facebook werden die
                    bei dieser Gelegenheit eingegebenen personenbezogenen Daten des
                    Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers
                    werden bei uns gelöscht, sofern die Anfrage des Nutzers abschließend
                    beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie
                    z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
                </p>
                <p>
                    Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf.
                    auch Cookies gesetzt.
                </p>
                <p>
                    Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so
                    besteht die Möglichkeit, die Installation der Cookies durch eine
                    entsprechende Einstellung des Browsers zu verhindern. Bereits
                    gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die
                    Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei
                    Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen
                    des Browsers unterbinden, sondern durch die entsprechende Einstellung
                    des Flash-Players. Sollte der Nutzer die Installation der Cookies
                    verhindern oder einschränken, kann dies dazu führen, dass nicht
                    sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
                </p>
                <p>
                    Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur
                    Löschung der von Facebook verarbeiteten Daten finden sich in der
                    Datenrichtlinie von Facebook:
                </p>
                <p>
                    <a href="https://www.facebook.com/privacy/explanation" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/privacy/explanation</a>
                </p>
                <p>
                    Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Meta
                    Platforms Ireland Limited auch über die Meta Platforms, Inc., 1601
                    Willow Road, Menlo Park, California 94025 in den USA erfolgt.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
                <p>
                    Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation
                    mit Interessenten oder Kunden betreiben wir eine Firmenpräsenz auf der
                    Plattform Instagram.
                </p>
                <p>
                    Auf dieser Social-Media-Plattform sind wir gemeinsam mit der Meta
                    Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland,
                    verantwortlich.
                </p>
                <p>
                    Der Datenschutzbeauftragte von Instagram kann über ein Kontaktformular
                    erreicht werden:
                </p>
                <p>
                    <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
                </p>
                <p>
                    Die gemeinsame Verantwortlichkeit haben wir in einer Vereinbarung
                    bezüglich der jeweiligen Verpflichtungen im Sinne der DSGVO geregelt.
                    Diese Vereinbarung, aus der sich die gegenseitigen Verpflichtungen
                    ergeben, ist unter dem folgenden Link abrufbar:
                </p>
                <p>
                    <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
                </p>
                <p>
                    Rechtsgrundlage für die dadurch erfolgende und nachfolgend
                    wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6
                    Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht an der
                    Analyse, der Kommunikation sowie dem Absatz und der Bewerbung unserer
                    Produkte und Leistungen.
                </p>
                <p>
                    Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6
                    Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die
                    Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit
                    durch eine Mitteilung an den Plattformbetreiber für die Zukunft
                    widerrufen.
                </p>
                <p>
                    Bei dem Aufruf unseres Onlineauftritts auf der Plattform Instagram
                    werden von der Facebook Ireland Ltd. als Betreiberin der Plattform in
                    der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse
                    etc.) verarbeitet.
                </p>
                <p>
                    Diese Daten des Nutzers dienen zu statistischen Informationen über die
                    Inanspruchnahme unserer Firmenpräsenz auf Instagram. Die Facebook
                    Ireland Ltd. nutzt diese Daten zu Marktforschungs- und Werbezwecken
                    sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile
                    ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer
                    innerhalb und außerhalb von Instagram interessenbezogen zu bewerben.
                    Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf
                    Instagram eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten
                    mit dem jeweiligen Nutzerkonto verknüpfen.
                </p>
                <p>
                    Im Falle einer Kontaktaufnahme des Nutzers über Instagram werden die
                    bei dieser Gelegenheit eingegebenen personenbezogenen Daten des
                    Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers
                    werden bei uns gelöscht, sofern die Anfrage des Nutzers abschließend
                    beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie
                    z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
                </p>
                <p>
                    Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf.
                    auch Cookies gesetzt.
                </p>
                <p>
                    Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so
                    besteht die Möglichkeit, die Installation der Cookies durch eine
                    entsprechende Einstellung des Browsers zu verhindern. Bereits
                    gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die
                    Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei
                    Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen
                    des Browsers unterbinden, sondern durch die entsprechende Einstellung
                    des Flash-Players. Sollte der Nutzer die Installation der Cookies
                    verhindern oder einschränken, kann dies dazu führen, dass nicht
                    sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
                </p>
                <p>
                    Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur
                    Löschung der von Instagram verarbeiteten Daten finden sich in der
                    Datenrichtlinie von Instagram:
                </p>
                <p>
                    <a href="https://help.instagram.com/519522125107875" target="_blank"
                        rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
                </p>
                <p>
                    Es ist nicht ausgeschlossen, dass die Verarbeitung durch die Facebook
                    Ireland Ltd. auch über die Meta Platforms, Inc., 1601 Willow Road,
                    Menlo Park, California 94025 in den USA erfolgt.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Twitter</h4>
                <p>
                    Wir unterhalten bei Twitter eine Onlinepräsenz um unser Unternehmen
                    sowie unsere Leistungen zu präsentieren und mit Kunden/Interessenten
                    zu kommunizieren. Twitter ist ein Service der Twitter Inc., 1355
                    Market Street, Suite 900, San Francisco, CA 94103, USA.
                </p>
                <p>
                    Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass
                    Daten der Nutzer außerhalb der Europäischen Union, insbesondere in den
                    USA, verarbeitet werden. Hierdurch können gesteigerte Risiken für die
                    Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf die
                    Nutzerdaten erschwert werden kann. Auch haben wir keinen Zugriff auf
                    diese Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei
                    Twitter.
                </p>
                <p>Die Datenschutzhinweise von Twitter finden Sie unter</p>
                <p>
                    <a href="https://twitter.com/de/privacy" target="_blank"
                        rel="noopener nofollow">https://twitter.com/de/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    Wir unterhalten bei YouTube eine Onlinepräsenz um unser Unternehmen
                    sowie unsere Leistungen zu präsentieren und mit Kunden/Interessenten
                    zu kommunizieren. YouTube ist ein Service der Google Ireland Limited,
                    Gordon House, Barrow Street, Dublin 4, Irland, ein Tochterunternehmen
                    der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043
                    USA.
                </p>
                <p>
                    Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass
                    Daten der Nutzer außerhalb der Europäischen Union, insbesondere in den
                    USA, verarbeitet werden. Hierdurch können gesteigerte Risiken für die
                    Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf die
                    Nutzerdaten erschwert werden kann. Auch haben wir keinen Zugriff auf
                    diese Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei
                    YouTube.
                </p>
                <p>Die Datenschutzhinweise von YouTube finden Sie unter</p>
                <p>
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">
                    Allgemeine Verlinkung auf Profile bei Drittanbietern
                </h4>
                <p>
                    Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend
                    aufgeführten sozialen Netzwerke ein.
                </p>
                <p>
                    Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das
                    berechtigte Interesse des Anbieters besteht an der Verbesserung der
                    Nutzungsqualität der Website.
                </p>
                <p>
                    Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik.
                    Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu
                    dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.
                </p>
                <p>
                    Nach der Weiterleitung des Kunden werden durch das jeweilige Netzwerk
                    Informationen über den Nutzer erfasst. Dies sind zunächst Daten wie
                    IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer
                    währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks
                    eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten
                    Informationen des konkreten Besuches des Nutzers dem persönlichen
                    Account des Nutzers zuordnen. Interagiert der Nutzer über einen
                    „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen
                    in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf.
                    veröffentlicht werden. Will der Nutzer verhindern, dass die
                    gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet
                    werden, muss sich der Nutzer vor dem Anklicken der Grafik ausloggen.
                    Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto
                    entsprechend zu konfigurieren.
                </p>
                <p>Folgende soziale Netzwerke sind vom Anbieter verlinkt:</p>
                <h4 class="jet-listing-dynamic-field__content">facebook</h4>
                <p>
                    Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2,
                    Irland.
                </p>
                <p>
                    Datenschutzerklärung:
                    <a href="https://www.facebook.com/policy.php" target="_blank"
                        rel="noopener nofollow">https://www.facebook.com/policy.php</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
                <p>
                    Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2,
                    Irland.
                </p>
                <p>
                    Datenschutzerklärung:
                    <a href="https://help.instagram.com/519522125107875" target="_blank"
                        rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                    ein Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway,
                    Mountain View, CA 94043 USA
                </p>
                <p>
                    Datenschutzerklärung:
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <h4 class="jet-listing-dynamic-field__content">FontAwesome</h4>
                <p>
                    Um Schriften und visuelle Elemente unseres Internetauftritts
                    darstellen zu können, setzen wir die externen Schriftarten von
                    FontAwesome ein. Bei FontAwesome handelt es sich um einen Dienst der
                </p>
                <p>
                    Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA,
                    nachfolgend nur „FontAwesome“ genannt.
                </p>
                <p>
                    Bei dem Aufruf unseres Internetauftritts wird eine Verbindung zum
                    Server von FontAwesome in den USA aufgebaut, um so die Darstellung von
                    Schriften und visuellen Elemente zu ermöglichen und zu aktualisieren.
                </p>
                <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
                    Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb
                    unseres Internetauftritts.
                </p>
                <p>
                    Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung
                    zum Server von FontAwesome kann FontAwesome ermitteln, von welcher
                    Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die
                    Darstellung der Schrift zu übermitteln ist.
                </p>
                <p>FontAwesome bietet unter
                    <a href="https://fontawesome.com/privacy" target="_blank"
                        rel="noopener nofollow">https://fontawesome.com/privacy</a>
                    weitere Informationen an und zwar insbesondere zu den Möglichkeiten
                    der Unterbindung der Datennutzung.
                </p>
                <h4 class="jet-listing-dynamic-field__content">Google Fonts</h4>
                <p>
                    In unserem Internetauftritt setzen wir Google Fonts zur Darstellung
                    externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                    nachfolgend nur „Google“ genannt.
                </p>
                <p>
                    Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu
                    ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung
                    zu dem Google-Server in den USA aufgebaut.
                </p>
                <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
                    Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb
                    unseres Internetauftritts.
                </p>
                <p>
                    Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung
                    zu Google kann Google ermitteln, von welcher Website Ihre Anfrage
                    gesendet worden ist und an welche IP-Adresse die Darstellung der
                    Schrift zu übermitteln ist.
                </p>
                <p>Google bietet unter
                    <a href="https://adssettings.google.com/authenticated" target="_blank"
                        rel="noopener nofollow">https://adssettings.google.com/authenticated</a>
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a>
                </p>
                <p>
                    weitere Informationen an und zwar insbesondere zu den Möglichkeiten
                    der Unterbindung der Datennutzung.
                </p>
                <h4 class="jet-listing-dynamic-field__content">jQuery CDN</h4>
                <p>
                    Zur Optimierung der Abrufgeschwindigkeit, der Gestaltung und
                    Darstellung der Inhalte unseres Internetauftritts auf
                    unterschiedlichen Endgeräten setzen wir in unserem Internetauftritt
                    den Dienst
                </p>
                <p>
                    jQuery CDN, ein Content Delivery Network („CDN“), ein. Hierbei handelt
                    es sich um einen Dienst der jQuery Foundation, nachfolgend nur
                    „jQuery“ genannt. jQuery wird für die JS Foundation über das StackPath
                    CDN verteilt.
                </p>
                <p>
                    Um die Inhalte unseres Internetauftritts schnell ausliefern zu können,
                    greift der Dienst auf sog. JavaScript-Bibliotheken zurück. Dabei
                    werden entsprechende Dateien von dem CDN-Server geladen, soweit sie
                    nicht schon durch einen Besuch eines anderen Internetauftritts in
                    Ihrem Browser-Cache vorhanden sind. Im Falle der Verbindung zu dem
                    CDN-Server wird Ihre IP-Adresse erfasst. Dabei kann nicht
                    ausgeschlossen werden, dass eine Verbindung zu einem Server außerhalb
                    der EU erfolgt.
                </p>
                <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes
                    Interesse liegt in der Beschleunigung der Ladezeiten unseres
                    Internetauftritts sowie in dessen Optimierung.
                </p>
                <p>
                    Um die Ausführung des Java-Script-Codes von jQuery insgesamt zu
                    verhindern, können Sie einen sog. Java-Script-Blocker installieren,
                    wie bspw. noscript.net oder ghostery.com. Sollten Sie die Ausführung
                    des Java-Script-Codes verhindern oder einschränken, kann dies aus
                    technischen Gründen allerdings dazu führen, dass womöglich nicht
                    sämtliche Inhalte und Funktionen unseres Internetauftritts verfügbar
                    sind.
                </p>
                <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
                <p>
                    In unserem Internetauftritt setzen wir YouTube ein. Hierbei handelt es
                    sich um ein Videoportal der Google Ireland Limited, Gordon House,
                    Barrow Street, Dublin 4, Irland, nachfolgend nur „YouTube“ genannt.
                </p>
                <p>
                    Wir nutzen YouTube im Zusammenhang mit der Funktion „Erweiterter
                    Datenschutzmodus“, um Ihnen Videos anzeigen zu können. Im Falle einer
                    von Ihnen erteilten Einwilligung für diese Verarbeitung ist
                    Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch
                    Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in
                    der Qualitätsverbesserung unseres Internetauftritts. Die Funktion
                    „Erweiterter Datenschutzmodus“ bewirkt laut Angaben von YouTube, dass
                    die nachfolgend noch näher bezeichneten Daten nur dann an den Server
                    von YouTube übermittelt werden, wenn Sie ein Video auch tatsächlich
                    starten.
                </p>
                <p>
                    Ohne diesen „Erweiterten Datenschutz“ wird eine Verbindung zum Server
                    von YouTube in den USA hergestellt, sobald Sie eine unserer
                    Internetseiten, auf der ein YouTube-Video eingebettet ist, aufrufen.
                </p>
                <p>
                    Diese Verbindung ist erforderlich, um das jeweilige Video auf unserer
                    Internetseite über Ihren Internet-Browser darstellen zu können. Im
                    Zuge dessen wird YouTube zumindest Ihre IP-Adresse, das Datum nebst
                    Uhrzeit sowie die von Ihnen besuchte Internetseite erfassen und
                    verarbeiten. Zudem wird eine Verbindung zu dem Werbenetzwerk
                    „DoubleClick“ von Google hergestellt.
                </p>
                <p>
                    Sollten Sie gleichzeitig bei YouTube eingeloggt sein, weist YouTube
                    die Verbindungsinformationen Ihrem YouTube-Konto zu. Wenn Sie das
                    verhindern möchten, müssen Sie sich entweder vor dem Besuch unseres
                    Internetauftritts bei YouTube ausloggen oder die entsprechenden
                    Einstellungen in Ihrem YouTube-Benutzerkonto vornehmen.
                </p>
                <p>
                    Zum Zwecke der Funktionalität sowie zur Analyse des Nutzungsverhaltens
                    speichert YouTube dauerhaft Cookies über Ihren Internet-Browser auf
                    Ihrem Endgerät. Falls Sie mit dieser Verarbeitung nicht einverstanden
                    sind, haben Sie die Möglichkeit, die Speicherung der Cookies durch
                    eine Einstellung in Ihrem Internet-Browsers zu verhindern. Nähere
                    Informationen hierzu finden Sie vorstehend unter „Cookies“.
                </p>
                <p>
                    Weitergehende Informationen über die Erhebung und Nutzung von Daten
                    sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Google
                    in den unter
                    <a href="https://policies.google.com/privacy" target="_blank"
                        rel="noopener nofollow">https://policies.google.com/privacy</a> abrufbaren Datenschutzhinweisen
                    bereit.
                </p>
                <p>
                    <a href="https://www.generator-datenschutzerklärung.de" target="_blank"
                        rel="noopener">Muster-Datenschutzerklärung</a>
                    der
                    <a href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
                        target="_blank" rel="noopener">Anwaltskanzlei Weiß &amp; Partner</a>
                </p>
            </Text> : null}
            {language == "fr" ? <Text>
            <h2>Politique de confidentialité</h2>
            <p>
                Nous traitons uniquement vos données à caractère personnel (ci-après
                dénommées le plus souvent «&nbsp;Données&nbsp;») selon les besoins et
                dans le but de proposer un site internet fonctionnel et convivial,
                notamment dans son contenu et en termes de services proposés.
            </p>
            <p>
                En vertu de l’art. 4, paragraphe 1, du règlement (UE) 2016/679, le
                règlement de base sur la protection des données (ci-après dénommé
                «&nbsp;RGPD&nbsp;») correspond à toute opération ou tout ensemble
                d’opérations effectuées avec ou sans procédés automatisés et appliqués
                à des données ou des ensembles de données à caractère personnel,
                telles que la collecte, l’enregistrement, l’organisation, la
                structuration, la conservation, l’adaptation ou la modification, la
                lecture, la consultation, l’utilisation, la communication par
                transmission, la diffusion ou tout autre moyen permettant le
                rapprochement ou l’interconnexion, la limitation, l’effacement ou la
                destruction.
            </p>
            <p>
                Notre politique de confidentialité vous fournit principalement des
                informations relatives à la nature, la portée, l’objectif, la durée et
                la base légale du traitement des données à caractère personnel, dans
                la mesure où nous décidons des objectifs et des moyens du traitement,
                seuls ou avec d’autres partenaires. Nous vous informons également des
                partenaires tiers avec lesquels nous travaillons à des fins
                d’optimisation et d’augmentation de la qualité d’utilisation, lorsque
                ces derniers traitent les données sous leur propre responsabilité.
            </p>
            <p>
                Notre politique de confidentialité est structurée comme suit&nbsp;:
            </p>
            <p>
                I. Informations nous concernant en tant que responsables<br />II.
                Droits de l’utilisateur et des parties concernées<br />III.
                Informations relatives au traitement des données
            </p>
            <p>
                <strong>I. Informations nous concernant en tant que responsables</strong>
            </p>
            <p>
                En termes de protection des données, le fournisseur responsable de ce
                site internet est&nbsp;:
            </p>
            [Firma]<br />[Vorname, Nachname]<br />[Straße, Hausnummer]<br />[Postleitzahl,
            Ort]
            <p>
                Telefon: [Telefonnummer]<br />Telefax: [Faxnummer]<br />E-Mail:
                [E-Mail]
            </p>
            <p>
                Le responsable de la protection des données chez le fournisseur
                est&nbsp;:
            </p>
            [DSB – Vorname, Nachname]<br />Telefon: [DSB – Telefonnummer]<br />Telefax:
            [DSB – Faxnummer]<br />E-Mail: [DSB – E-Mail] [en cas de désignation
            d’un délégué externe à la protection des données, les informations
            suivantes doivent être complétées] [DSB-Extern – Straße, Hausnummer]<br />[DSB-Extern
            – Postleitzahl, Ort]
            <p>
                <strong>II. Droits de l’utilisateur et des parties concernées</strong>
            </p>
            <p>
                En ce qui concerne le traitement des données décrit ci-dessous plus en
                détail, les utilisateurs et les personnes concernées ont le
                droit&nbsp;:
            </p>
            <ul>
                <li>
                    D’obtenir la confirmation que les données sont traitées, de savoir
                    quels types de données sont traités, d’obtenir des informations
                    supplémentaires relatives au traitement des données et des copies
                    des données (voir également l’Art. 15 du RGPD)&nbsp;;
                </li>
                <li>
                    De pouvoir corriger ou compléter des données erronées ou incomplètes
                    (voir l’Art. 16 du RGPD)&nbsp;;
                </li>
                <li>
                    De pouvoir supprimer immédiatement les données les concernant (voir
                    également l’Art. 17 du RGPD), ou, de savoir si un traitement
                    supplémentaire, conformément à l’Art. 17, paragraphe 3 du RGPD, est
                    requis. De pouvoir limiter le traitement, conformément à l’Art. 18
                    du RGPD&nbsp;;
                </li>
                <li>
                    De pouvoir obtenir les données les concernant et qu’ils ont
                    fournies, et de savoir si ces données ont été transmises à d’autres
                    prestataires/autorités (voir également l’Art. 20 du RGPD)&nbsp;;
                </li>
                <li>
                    De déposer une plainte auprès des autorités de contrôle s’ils
                    considèrent que le fournisseur viole la règlementation en matière de
                    protection des données (voir également l’Art. 77 du RGPD).
                </li>
            </ul>
            <p>
                En outre, le fournisseur est tenu d’informer tous les destinataires,
                auprès desquels les données ont été divulguées, de toute modification,
                suppression de données ou restriction du traitement, et ce,
                conformément à l’article 16, 17 paragraphes 1, 18 du RGPD. Cependant,
                cette obligation ne s’applique toutefois pas si la communication des
                informations s’avère impossible ou implique des efforts
                disproportionnés. L’utilisateur a néanmoins le droit d’obtenir des
                informations sur ces destinataires.
            </p>
            <p>
                <strong>De même, en vertu de l’Art. 21 du RGPD, les utilisateurs et les
                    personnes concernées peuvent s’opposer au traitement ultérieur de
                    leurs données si les données sont traitées par le fournisseur
                    conformément à l’Art. 6, paragraphe 1, point f du RGPD. Il est en
                    particulier autorisé de s’opposer au traitement des données à des
                    fins de publicité directe.</strong>
            </p>
            <p>
                <strong>III. Informations relatives au traitement des données</strong>
            </p>
            <p>
                Vos données traitées lors de l’utilisation de notre site internet
                seront supprimées ou bloquées dès lors que la raison de leur
                conservation n’a plus lieu d’être, que leur suppression n’entre pas en
                conflit avec les exigences légales en matière de conservation. Aucune
                autre information ne sera fournie ultérieurement relativement aux
                méthodes de traitement individuelles.
            </p>
            <h4 class="jet-listing-dynamic-field__content">
                Demandes/possibilités de contact
            </h4>
            <p>
                Si vous nous contactez via un formulaire de contact ou par e-mail, les
                données fournies seront utilisées pour traiter votre demande. Fournir
                ces données est nécessaire pour traiter votre demande et y répondre :
                si vous ne les fournissez pas, nous ne pourrons pas répondre ou y
                répondrons, au mieux, dans la mesure du possible. La base juridique
                pour ce traitement est l’Art. 6, paragraphe 1, point b) du RGPD. Vos
                données seront par la suite supprimées, à condition que nous ayons
                répondu à votre demande et que la suppression ne viole pas les
                exigences de conservation légales, par exemple, pour exécuter un
                contrat ultérieurement.
            </p>
            <h4 class="jet-listing-dynamic-field__content">Newsletter</h4>
            <p>
                Lorsque vous vous abonnez à notre newsletter, les données qui vous ont
                été demandées (adresse électronique, et, éventuellement, vos nom et
                adresse postale) nous sont envoyées. Nous conservons simultanément
                l’adresse IP à partir de laquelle vous avez accédé à notre site, ainsi
                que la date et l’heure de votre inscription. Lors de la procédure
                d’inscription ultérieure, nous vous demanderons de consentir à l’envoi
                de cette newsletter, en décrirons le contenu précisément et nous
                référerons à la présente politique de confidentialité. Nous utilisons
                les données collectées exclusivement pour l’envoi de la
                newsletter&nbsp;: elles ne sont donc pas transmises à des tiers.
            </p>
            <p>
                A ce titre, la base juridique est l’article 6, paragraphe 1, point a)
                du RGPD.
            </p>
            <p>
                Il est possible de retirer à tout moment son consentement à recevoir
                la newsletter, conformément à l’Art. 7, paragraphe 3 du RGPD. Cette
                résiliation n’a pas d’effet rétroactif. Il vous suffit de nous
                informer de votre résiliation ou de cliquer sur le lien de
                désinscription figurant dans toutes les newsletters.
            </p>
            <h4 class="jet-listing-dynamic-field__content">Facebook</h4>
            <p>
                Afin d’assurer la publicité relative à nos produits et prestations, de
                même qu’afin de communiquer avec des prospects ou clients, nous
                veillons à ce que notre entreprise dispose d’une certaine visibilité
                sur la plateforme Facebook.
            </p>
            <p>
                Sur la plateforme de ce réseau social, nous sommes conjointement
                responsables avec la Société Meta Platforms Ireland Limited, 4 Grand
                Canal Square, Dublin 2, Irland.
            </p>
            <p>
                Le Délégué à la protection des données de Facebook peut être contacté
                via le formulaire suivant :
            </p>
            <p>
                <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
            </p>
            <p>
                Nous avons fixé les dispositions applicables à cette coresponsabilité
                dans un accord portant sur les différentes obligations découlant du
                RGPD. Ledit accord, duquel découlent certaines obligations
                réciproques, est consultable via le lien suivant :
            </p>
            <p>
                <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
            </p>
            <p>
                La base juridique régissant les opérations de traitement des données
                personnelles ainsi initiées et décrites ci-après est l’Art. 6
                paragraphe 1 point f du RGPD. L’analyse, la communication, de même que
                la commercialisation de nos produits et services et la poursuite
                d’activités publicitaires concernant ces derniers constituent notre
                intérêt légitime au sens de ce règlement.
            </p>
            <p>
                Le consentement de l’utilisateur, tel que défini à l’art. 6 paragraphe
                1 point a du RGPD, vis-à-vis de l’exploitant de la plateforme peut
                également servir de base juridique régissant ces opérations.
                L’utilisateur dispose du droit de retirer son consentement à tout
                moment, avec effet ultérieur, conformément à l’Art. 7 paragraphe 3 du
                RGPD, en notifiant l’exploitant de la plateforme de cette décision.
            </p>
            <p>
                Lors de la consultation de notre site Internet sur la plateforme
                Facebook, certaines données relatives à l’utilisateur (par exemple,
                informations personnelles, adresse IP, etc.) seront traitées par
                Facebook Ireland Ltd., en tant que société d’exploitation de la
                plateforme au sein de l’UE.
            </p>
            <p>
                Les données de l’utilisateur sont utilisées à des fins statistiques,
                en vue de collecter des informations concernant l’impact de la
                visibilité de notre entreprise sur Facebook. La Société Facebook
                Ireland Ltd. utilise ces données à des fins publicitaires ou d’études
                de marché, ainsi qu’en vue d’établir des profils d’utilisateurs. Grâce
                aux profils ainsi établis, Facebook Ireland Ltd. peut notamment
                diffuser des publicités auprès de ces utilisateurs, en fonction de
                leurs intérêts, sur Facebook comme en dehors de cette plateforme. Dans
                le cas où l’utilisateur, au moment de sa visite, est déjà connecté sur
                son compte Facebook, Facebook Ireland Ltd. peut en outre associer ces
                données avec le compte utilisateur correspondant.
            </p>
            <p>
                Dans le cas d’une prise de contact de l’utilisateur sur Facebook, les
                données personnelles le concernant saisies à cette occasion seront
                utilisées afin de traiter la demande. Nous assurerons la suppression
                de ces données utilisateur, dès lors que la demande émanant de
                l’utilisateur sera considérée dûment traitée, et dans la mesure où
                aucune obligation légale de conservation, par exemple dans le cas de
                l’exécution ultérieure d’un contrat, ne s’y oppose.
            </p>
            <p>
                Afin de procéder au traitement des données, des cookies sont
                susceptibles d’être installés, le cas échéant, par la Société Facebook
                Ireland Ltd.
            </p>
            <p>
                Dans le cas où l’utilisateur ne souhaiterait pas que ce traitement
                soit effectué, il est possible d’empêcher l’installation des cookies
                en paramétrant le navigateur Internet à cet effet. Les cookies déjà
                enregistrés peuvent également être effacés à tout moment. Les réglages
                prévus à cet effet dépendent du navigateur utilisé. Pour ce qui est
                des cookies Flash, étant donné qu’il est impossible d’en empêcher le
                traitement en agissant sur les paramètres du navigateur Internet, il
                convient de modifier les paramètres du lecteur Flash correspondants.
                Dans le cas où l’utilisateur empêche ou limite l’installation de
                cookies, il est possible que celui-ci ne puisse plus, par la suite,
                utiliser pleinement toutes les fonctionnalités de Facebook.
            </p>
            <p>
                La Politique d’utilisation des données de Facebook comprend certaines
                informations complémentaires sur les opérations de traitement des
                données, de même que leur interruption, ainsi que la suppression des
                données traitées par Facebook :
            </p>
            <p>
                <a href="https://www.facebook.com/privacy/explanation" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/privacy/explanation</a>
            </p>
            <p>
                Il n’est pas exclu qu’un traitement des données ait lieu par
                l’intermédiaire de la Société Facebook Ireland Ltd., éventuellement
                via la Société Meta Platforms, Inc., 1601 Willow Road, Menlo Park,
                California 94025, aux États-Unis.
            </p>
            <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
            <p>
                Afin d’assurer la publicité relative à nos produits et prestations, de
                même qu’afin de communiquer avec des prospects ou clients, nous
                veillons à ce que notre entreprise dispose d’une certaine visibilité
                sur la plateforme Instagram.
            </p>
            <p>
                Sur la plateforme de ce réseau social, nous sommes conjointement
                responsables avec la Société Meta Platforms Ireland Limited, 4 Grand
                Canal Square, Dublin 2, Irlande.
            </p>
            <p>
                Le Délégué à la protection des données de Instagram peut être contacté
                via le formulaire suivant :
            </p>
            <p>
                <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/help/contact/540977946302970</a>
            </p>
            <p>
                Nous avons fixé les dispositions applicables à cette coresponsabilité
                dans un accord portant sur les différentes obligations découlant du
                RGPD. Ledit accord, duquel découlent certaines obligations
                réciproques, est consultable via le lien suivant :
            </p>
            <p>
                <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/legal/terms/page_controller_addendum</a>
            </p>
            <p>
                La base juridique régissant les opérations de traitement des données
                personnelles ainsi initiées et décrites ci-après est l’Art. 6
                paragraphe 1 point f du RGPD. L’analyse, la communication, de même que
                la commercialisation de nos produits et services et la poursuite
                d’activités publicitaires concernant ces derniers constituent notre
                intérêt légitime au sens de ce règlement.
            </p>
            <p>
                Le consentement de l’utilisateur, tel que défini à l’art. 6 paragraphe
                1 point a du RGPD, vis-à-vis de l’exploitant de la plateforme peut
                également servir de base juridique régissant ces opérations.
                L’utilisateur dispose du droit de retirer son consentement à tout
                moment, avec effet ultérieur, conformément à l’Art. 7 paragraphe 3 du
                RGPD, en notifiant l’exploitant de la plateforme de cette décision.
            </p>
            <p>
                Lors de la consultation de notre site Internet sur la plateforme
                Instagram, certaines données relatives à l’utilisateur (par exemple,
                informations personnelles, adresse IP, etc.) seront traitées par
                Facebook Ireland Ltd., en tant que société d’exploitation de la
                plateforme au sein de l’UE.
            </p>
            <p>
                Les données de l’utilisateur sont utilisées à des fins statistiques,
                en vue de collecter des informations concernant l’impact de la
                visibilité de notre entreprise sur Instagram. La Société Facebook
                Ireland Ltd. utilise ces données à des fins publicitaires ou d’études
                de marché, ainsi qu’en vue d’établir des profils d’utilisateurs. Grâce
                aux profils ainsi établis, Facebook Ireland Ltd. peut notamment
                diffuser des publicités auprès de ces utilisateurs, en fonction de
                leurs intérêts, sur Instagram comme en dehors de cette plateforme.
                Dans le cas où l’utilisateur, au moment de sa visite, est déjà
                connecté sur son compte Instagram, Facebook Ireland Ltd. peut en outre
                associer ces données avec le compte utilisateur correspondant.
            </p>
            <p>
                Dans le cas d’une prise de contact de l’utilisateur sur Instagram, les
                données personnelles le concernant saisies à cette occasion seront
                utilisées afin de traiter la demande. Nous assurerons la suppression
                de ces données utilisateur, dès lors que la demande émanant de
                l’utilisateur sera considérée dûment traitée, et dans la mesure où
                aucune obligation légale de conservation, par exemple dans le cas de
                l’exécution ultérieure d’un contrat, ne s’y oppose.
            </p>
            <p>
                Afin de procéder au traitement des données, des cookies sont
                susceptibles d’être installés, le cas échéant, par la Société Facebook
                Ireland Ltd.
            </p>
            <p>
                Dans le cas où l’utilisateur ne souhaiterait pas que ce traitement
                soit effectué, il est possible d’empêcher l’installation des cookies
                en paramétrant le navigateur Internet à cet effet. Les cookies déjà
                enregistrés peuvent également être effacés à tout moment. Les réglages
                prévus à cet effet dépendent du navigateur utilisé. Pour ce qui est
                des cookies Flash, étant donné qu’il est impossible d’en empêcher le
                traitement en agissant sur les paramètres du navigateur Internet, il
                convient de modifier les paramètres du lecteur Flash correspondants.
                Dans le cas où l’utilisateur empêche ou limite l’installation de
                cookies, il est possible que celui-ci ne puisse plus, par la suite,
                utiliser pleinement toutes les fonctionnalités de Instagram.
            </p>
            <p>
                La Politique d’utilisation des données de Instagram comprend certaines
                informations complémentaires sur les opérations de traitement des
                données, de même que leur interruption, ainsi que la suppression des
                données traitées par Instagram:
            </p>
            <p>
                <a href="https://help.instagram.com/519522125107875" target="_blank"
                    rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
            </p>
            <p>
                Il n’est pas exclu qu’un traitement des données ait lieu par
                l’intermédiaire de la Société Facebook Ireland Ltd., éventuellement
                via la Société Meta Platforms, Inc., 1601 Willow Road, Menlo Park,
                California 94025, aux États-Unis.
            </p>
            <h4 class="jet-listing-dynamic-field__content">Twitter</h4>
            <p>
                Nous assurons, sur Twitter, une présence en ligne, afin de présenter
                notre entreprise, ainsi que nos prestations, et de communiquer auprès
                de clients/prospects. Twitter est un service de Twitter Inc., 1355
                Market Street, Suite 900, San Francisco, CA 94103, États-Unis.
            </p>
            <p>
                Dans cette mesure, nous vous rappelons que certaines données relatives
                à l’utilisateur sont susceptibles d’être traitées en dehors de l’Union
                européenne, et notamment aux États-Unis. Cela peut entraîner des
                risques accrus pour l’utilisateur, dans la mesure où l’accès ultérieur
                à ses données utilisateur pourrait s’avérer plus complexe. Nous
                n’avons pas, non plus, accès à ces données utilisateur. L’accès à
                celles-ci est en effet exclusivement réservé à Twitter.
            </p>
            <p>
                Les consignes de Twitter en matière de protection des données sont
                consultables sur :
            </p>
            <p>
                <a href="https://twitter.com/de/privacy" target="_blank"
                    rel="noopener nofollow">https://twitter.com/de/privacy</a>
            </p>
            <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
            <p>
                Nous assurons, sur Youtube, une présence en ligne, afin de présenter
                notre entreprise, ainsi que nos prestations, et de communiquer auprès
                de clients/prospects. YouTube est un service de la Société Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande,
                filiale de Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                94043, États-Unis.
            </p>
            <p>
                Dans cette mesure, nous vous rappelons que certaines données relatives
                à l’utilisateur sont susceptibles d’être traitées en dehors de l’Union
                européenne, et notamment aux États-Unis. Cela peut entraîner des
                risques accrus pour l’utilisateur, dans la mesure où l’accès ultérieur
                à ses données utilisateur pourrait s’avérer plus complexe. Nous
                n’avons pas, non plus, accès à ces données utilisateur. L’accès à
                celles-ci est en effet exclusivement réservé à YouTube.
            </p>
            <p>
                Les consignes de Youtube en matière de protection des données sont
                consultables sur :
            </p>
            <p>
                <a href="https://policies.google.com/privacy" target="_blank"
                    rel="noopener nofollow">https://policies.google.com/privacy</a>
            </p>
            <h4 class="jet-listing-dynamic-field__content">
                Introduction générale
            </h4>
            <h4 class="jet-listing-dynamic-field__content">facebook</h4>
            <p>
                Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irlande,
                filiale de Facebook Inc., 1601 S. California Avenue, Palo Alto, CA
                94304, États-Unis.
            </p>
            <p>
                Politique d’utilisation des données :
                <a href="https://www.facebook.com/policy.php" target="_blank"
                    rel="noopener nofollow">https://www.facebook.com/policy.php</a>
            </p>
            <h4 class="jet-listing-dynamic-field__content">Instagram</h4>
            <p>
                Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irlande,
                filiale de Facebook Inc., 1601 S. California Avenue, Palo Alto, CA
                94304, États-Unis.
            </p>
            <p>
                Politique d’utilisation des données:
                <a href="https://help.instagram.com/519522125107875" target="_blank"
                    rel="noopener nofollow">https://help.instagram.com/519522125107875</a>
            </p>
            <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
            <p>
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                ein Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway,
                Mountain View, CA 94043 USA
            </p>
            <p>
                Politique d’utilisation des données:
                <a href="https://policies.google.com/privacy" target="_blank"
                    rel="noopener nofollow">https://policies.google.com/privacy</a>
            </p>
            <h4 class="jet-listing-dynamic-field__content">FontAwesome</h4>
            <p>
                Pour représenter les écritures et les éléments visuels de notre site
                Internet, nous avons recours aux polices de caractères externes de
                FontAwesome. FontAwesome est un service de
            </p>
            <p>
                Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA,
                ci-après dénommé simplement «&nbsp;FontAwesome&nbsp;».
            </p>
            <p>
                En affichant notre site Internet, une connexion est établie au serveur
                de FontAwesome aux États-Unis, pour permettre et mettre à jour la
                représentation des écritures et des éléments visuels.
            </p>
            <p>
                Le fondement juridique est l’art. 6 al. 1 let. f) du RGPD. Notre
                intérêt légitime réside dans l’optimisation et l’exploitation
                économique de notre site Internet.
            </p>
            <p>
                Grâce à la connexion établie avec le serveur de FontAwesome en
                affichant notre site Internet, FontAwesome peut déterminer depuis quel
                site Internet votre demande a été envoyée, et à quelle adresse IP la
                représentation de l’écriture doit être transmise.
            </p>
            <p>FontAwesome fournit sur</p>
            <p>
                <a href="https://fontawesome.com/privacy" target="_blank"
                    rel="noopener nofollow">https://fontawesome.com/privacy</a>
            </p>
            <p>
                des informations complémentaires et plus particulièrement sur les
                possibilités de suppression de l’utilisation des données.
            </p>
            <h4 class="jet-listing-dynamic-field__content">Google Fonts</h4>
            <p>
                Nous utilisons Google Fonts pour afficher les polices externes sur
                notre site. Google Maps est un service fourni par Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland, ci-après
                dénommé «&nbsp;Google&nbsp;».
            </p>
            <p>
                Afin de pouvoir proposer une représentation graphique de certains
                textes, une connexion au serveur de Google aux États-Unis s’établit
                lorsque vous visitez notre site.
            </p>
            <p>
                La base juridique est l’Art. 6, paragraphe 1, point f) du RGPD. Notre
                intérêt légitime réside dans l’optimisation et une exploitation
                rentable de notre site.
            </p>
            <p>
                La connexion établie avec Google lors de l’appel de notre site lui
                permet de déterminer à partir de quel site internet votre demande a
                été envoyée et à quelle adresse IP la présentation de la police doit
                être transmise.
            </p>
            <p>Google offre des informations supplémentaires aux adresses&nbsp;:</p>
            <p>
                <a href="https://adssettings.google.com/authenticated" target="_blank"
                    rel="noopener nofollow">https://adssettings.google.com/authenticated</a>
            </p>
            <p>
                <a href="https://policies.google.com/privacy" target="_blank"
                    rel="noopener nofollow">https://policies.google.com/privacy</a>
            </p>
            <p>
                en particulier sur les possibilités d’empêcher l’utilisation de
                données.
            </p>
            <h4 class="jet-listing-dynamic-field__content">jQuery CDN</h4>
            <p>
                Pour optimiser la vitesse de récupération, la conception et la
                présentation des contenus de notre site Internet sur différents
                terminaux, nous avons recours sur notre site Internet au service
            </p>
            <p>
                jQuery CDN, un Content Delivery Network («&nbsp;CDN&nbsp;»). Il s’agit
                ici d’un service de jQuery Foundation, ci-après dénommé simplement
                «&nbsp;jQuery&nbsp;». jQuery est distribué pour la JS Foundation par
                le StackPath CDN.
            </p>
            <p>
                Pour diffuser rapidement les contenus de notre site Internet, le
                service fait référence auxdites bibliothèques JavaScript. Les fichiers
                correspondants sont donc chargés par un serveur CDN, tant qu’ils ne
                sont pas présents dans votre cache de navigateur par une visite d’un
                autre site Internet. Dans le cas de la connexion au serveur CDN, votre
                adresse IP est enregistrée. Il ne peut donc pas être exclu qu’une
                connexion soit établie avec un serveur hors UE.
            </p>
            <p>
                Le fondement juridique est l’art. 6 al. 1 let. f) du RGPD. Notre
                intérêt légitime réside dans l’accélération des temps de chargement de
                notre site Internet et l’optimisation de celui-ci.
            </p>
            <p>
                Pour empêcher l’exécution du code JavaScript de jQuery dans son
                intégralité, vous pouvez installer un dénommé bloqueur JavaScript
                comme bspw. noscript.net ou ghostery.com. Si vous empêchez ou limitez
                l’exécution du code JavaScript , il peut arriver que certains contenus
                et fonctions de notre site Internet soient indisponibles pour des
                raisons techniques.
            </p>
            <h4 class="jet-listing-dynamic-field__content">YouTube</h4>
            <p>
                Nous utilisons YouTube sur notre site internet. Nous faisons ici
                référence à un portail vidéo de Google Ireland Limited, Gordon House,
                Barrow Street, Dublin 4, Irland, ci-après dénommé « YouTube ».
            </p>
            <p>
                Pour vous proposer des vidéos, nous utilisons YouTube et la fonction
                de « mode de protection des données avancé ». Pour tout consentement
                que vous donnez à ce traitement, le fondement juridique est l’art. 6,
                paragraphe 1, point a du RGPD. Le fondement juridique peut être aussi
                l’art. 6 paragraphe 1 point f du RGPD. Notre intérêt légitime réside
                dans l’amélioration de la qualité de notre site internet. La fonction
                de « mode de protection des données renforcé » signifie, selon
                YouTube, que les données ci-dessous ne sont pas transmises au serveur
                de YouTube, sauf si vous lisez réellement une vidéo.
            </p>
            <p>
                Sans cette «&nbsp;protection des données renforcée », vous seriez
                connecté au serveur YouTube aux États-Unis dès lors que vous
                visiteriez l’une de nos pages contenant une vidéo YouTube.
            </p>
            <p>
                Cette connexion est nécessaire pour pouvoir afficher la vidéo
                correspondante sur notre site via votre navigateur internet. Pour ce
                faire, YouTube collecte et traite au moins votre adresse IP, la date
                et l’heure, ainsi que la page que vous consultez. Il se connecte
                également au réseau publicitaire « DoubleClick&nbsp;» de Google.
            </p>
            <p>
                Si vous êtes connecté simultanément à YouTube, ce dernier fournit les
                informations de connexion à votre compte YouTube. Si vous souhaitez
                éviter que cela ne se produise, vous devez soit vous déconnecter de
                YouTube avant de consulter notre site, soit définir les paramètres
                appropriés dans votre compte utilisateur YouTube.
            </p>
            <p>
                Pour des raisons de fonctionnalité et pour l’analyse du comportement
                d’utilisation, YouTube enregistre en permanence les cookies via votre
                navigateur internet sur votre appareil. Si vous ne souhaitez pas que
                ce traitement soit effectué, vous pouvez empêcher l’enregistrement des
                cookies en paramétrant votre navigateur Internet à cet effet. Pour
                obtenir des informations supplémentaires, veuillez consulter la
                rubrique «&nbsp;Cookies&nbsp;» ci-dessus.
            </p>
            <p>
                Pour obtenir des informations supplémentaires sur la collecte et
                l’utilisation de données, ainsi que sur vos droits et vos options de
                protection, consultez la politique de confidentialité de Google à
                l’adresse&nbsp;:
            </p>
            <p>
                <a href="https://policies.google.com/privacy" target="_blank"
                    rel="noopener nofollow">https://policies.google.com/privacy</a>
            </p>
            <p>
                <a href="https://www.generator-datenschutzerklärung.de" target="_blank" rel="noopener">Exemple de
                    politique de confidentialité</a>
                du
                <a href="https://www.ratgeberrecht.eu/" target="_blank" rel="noopener">cabinet d’avocats Weiß &amp;
                    Partner</a>
            </p>
            </Text> : null}
        </main >
    )
};

export default Privacy;