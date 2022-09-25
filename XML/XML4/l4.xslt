<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
  <table border="1">
  <tr bgcolor="lightblue">
  <th style="text-align:center; padding: 20px 20px">Имя</th>
  <th style="text-align:center; padding: 20px 20px">Фамилия</th>
  <th style="text-align:center; padding: 20px 20px">Балл</th>
  <th style="text-align:center; padding: 20px 20px">День рождения</th>
  </tr>
<xsl:for-each select="university/classmate">
<xsl:sort select="bdate"/>
  <tr>
     <xsl:choose>
     <xsl:when test="score &gt; 6">
     <td bgcolor="green" style="font-weight:bold;"><xsl:value-of select="name"/></td>
     </xsl:when>
     <xsl:otherwise>
     <td bgcolor="red" style="font-weight:bold;"><xsl:value-of select="name"/></td>
     </xsl:otherwise>
     </xsl:choose>
     <td><xsl:value-of select="surname"/> </td>
     <td><xsl:value-of select="score"/> </td>
     <td><xsl:value-of select="bdate"/> </td>
  </tr>
</xsl:for-each>
 </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
