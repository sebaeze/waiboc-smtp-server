#
# Install node.js + postfix +
#
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
##
vi /etc/hosts            <-- Poner domain address
vi /etc/hostname         <-- Poner domain address
vi /etc/postfix/virtual  <-- contact@waiboc.com root \n admin@waiboc.com root
## sudo apt-get install postfix
sudo apt install mailutils
##
sudo postmap   /etc/postfix/virtual
sudo systemctl restart postfix
sudo systemctl status  postfix
/etc/init.d/postfix reload
##
echo " infooo " | mailx -s 'test v3'  sebaeze@gmail.com
##
echo "....finnnnn"
##