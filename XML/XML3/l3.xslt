<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Университеты Беларуси</h2>
  <table border="1">
  <tr bgcolor="lightblue">
  <th style="text-align:center; padding: 20px 20px">Университет</th>
  <th style="text-align:center; padding: 20px 20px">Срок обучения</th>
  <th style="text-align:center; padding: 20px 20px">Предметы ЦТ</th>
  <th style="text-align:center; padding: 20px 20px">Проходной балл</th>
  <th style="text-align:center; padding: 20px 20px">План набора</th>
  <th style="text-align:center; padding: 20px 20px">Город</th>
  </tr>
<xsl:for-each select="unibel/uni">
  <tr>
     <td><xsl:value-of select="name"> </xsl:value-of> </td>
     <td><xsl:value-of select="years"> </xsl:value-of> </td>
     <td><xsl:value-of select="ct"> </xsl:value-of> </td>
     <td><xsl:value-of select="ball"> </xsl:value-of> </td>
     <td><xsl:value-of select="plan"> </xsl:value-of> </td>
     <td><xsl:value-of select="city"> </xsl:value-of> </td>
  </tr>
</xsl:for-each>
 </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
