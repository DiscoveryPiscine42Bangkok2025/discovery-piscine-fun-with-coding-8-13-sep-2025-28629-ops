ins=$@
if [ -z $ins ]
then echo "No arguments supplied"
exit
fi

for i in $ins
do mkdir "ex$i"
done